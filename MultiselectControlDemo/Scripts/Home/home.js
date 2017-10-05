$(document).ready(function () {

  getEmployeesByAjax();

  // Select all items within the multi-select.
  $("#selectAll").click(function () {
    $("#my-select").multiSelect("select_all");
  });

  // Remove all selected items within the multi-select.
  $("#removeAll").click(function () {
    $("#my-select").multiSelect("deselect_all");
  });

  // Retrieve a list of employees with ajax.
  function getEmployeesByAjax() {
    $.ajax({
      url: "/Home/GetEmployees",
      type: "POST",
      dataType: "json",
      success: function (data) {

        // For each item in the retrieved data array, append an option
        // tag with the item's info.
        $.each(data, function (i, item) {
          $("#my-select").append($("<option>",
            {
              value: item.Id,
              text: item.FirstName + " " + item.LastName
            }));
        });

        // Convert the select with the dynamically populated option tags
        // into a multiSelect.
        initializeMultiSelectWithFilters();
      },
      error: function () {
        console.log("error!");
      }
    });
  }

  // Initialize element as mult-select with filters.
  function initializeMultiSelectWithFilters() {
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
  }


});

