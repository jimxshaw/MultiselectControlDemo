$(document).ready(function () {
  // Initialize element as a multi-select.
  //$("#my-select").multiSelect();

  // Initialize element as mult-select with filters.
  $('#my-select').multiSelect({
    selectableHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='Search'>",
    selectionHeader: "<input type='text' class='search-input form-control' autocomplete='off' placeholder='Search selected'>",
    afterInit: function (ms) {
      var that = this,
        $selectableSearch = that.$selectableUl.prev(),
        $selectionSearch = that.$selectionUl.prev(),
        selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
        selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

      that.qs1 = $selectableSearch.quicksearch(selectableSearchString)
        .on('keydown', function (e) {
          if (e.which === 40) {
            that.$selectableUl.focus();
            return false;
          }
        });

      that.qs2 = $selectionSearch.quicksearch(selectionSearchString)
        .on('keydown', function (e) {
          if (e.which == 40) {
            that.$selectionUl.focus();
            return false;
          }
        });
    },
    afterSelect: function () {
      this.qs1.cache();
      this.qs2.cache();
    },
    afterDeselect: function () {
      this.qs1.cache();
      this.qs2.cache();
    }
  });

  // Select all items within the multi-select.
  $("#selectAll").click(function () {
    $("#my-select").multiSelect("select_all");
  });

  // Remove all selected items within the multi-select.
  $("#removeAll").click(function () {
    $("#my-select").multiSelect("deselect_all");
  });
});