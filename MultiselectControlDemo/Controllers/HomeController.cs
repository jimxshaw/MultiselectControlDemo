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
        new Employee() {FirstName = "George", LastName = "Washington", Title = "President"},
        new Employee() {FirstName = "Thomas", LastName = "Jefferson", Title = "CEO"},
        new Employee() {FirstName = "Abraham", LastName = "Lincoln", Title = "General Counsel"},
        new Employee() {FirstName = "Franklin", LastName = "Roosevelt", Title = "Chairman"}
      };

      return Json(employees, JsonRequestBehavior.AllowGet);
    }
  }
}