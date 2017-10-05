using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MultiselectControlDemo.Models;

namespace MultiselectControlDemo.Controllers
{
  public class HomeController : Controller
  {
    public ActionResult Index()
    {
      return View();
    }

    public ActionResult About()
    {
      ViewBag.Message = "Your application description page.";

      return View();
    }

    public ActionResult Contact()
    {
      ViewBag.Message = "Your contact page.";

      return View();
    }

    public JsonResult GetEmployees()
    {
      var employees = new List<Employee>()
      {
        new Employee() {Id = 1, FirstName = "George", LastName = "Washington"},
        new Employee() {Id = 2, FirstName = "Thomas", LastName = "Jefferson"},
        new Employee() {Id = 3, FirstName = "Abraham", LastName = "Lincoln"},
        new Employee() {Id = 4, FirstName = "Franklin", LastName = "Roosevelt"},
        new Employee() {Id = 5, FirstName = "John", LastName = "Kennedy"},
        new Employee() {Id = 6, FirstName = "Richard", LastName = "Nixon"},
        new Employee() {Id = 7, FirstName = "James", LastName = "Madison"}
      };

      return Json(employees.OrderBy(e => e.FirstName), JsonRequestBehavior.AllowGet);
    }
  }
}