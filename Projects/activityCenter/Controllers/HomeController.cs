using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using activityCenter.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace activityCenter.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost("register")]
        public IActionResult Register(User newUser)
        {
            if (ModelState.IsValid)
            {
                if (_context.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in use!");
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                _context.Add(newUser);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("loggedInUser", newUser.UserId);
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpPost("login")]
        public IActionResult Login(LoginUser loginUser)
        {
            if (ModelState.IsValid)
            {
                User userInDb = _context.Users.FirstOrDefault(u => u.Email == loginUser.logEmail);
                if (userInDb == null)
                {
                    ModelState.AddModelError("logEmail", "Invalid login attempt!!!");
                    return View("Index");
                }
                PasswordHasher<LoginUser> Hasher = new PasswordHasher<LoginUser>();
                PasswordVerificationResult result = Hasher.VerifyHashedPassword(loginUser, userInDb.Password, loginUser.logPassword);
                if (result == 0)
                {
                    ModelState.AddModelError("logEmail", "Invalid login attempt!");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("loggedInUser", userInDb.UserId);
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            if (HttpContext.Session.GetInt32("loggedInUser") == null)
            {
                ModelState.AddModelError("loggedInUser", "Not signed in!");
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.UserId == (int)HttpContext.Session.GetInt32("loggedInUser"));
            ViewBag.allHobbies = _context.Hobbies.Include(d => d.MyUser).Include(r => r.ParticipantAt).ToList();
            return View("Dashboard");
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            ViewBag.UserId = (int)HttpContext.Session.GetInt32("loggedInUser");
            if (HttpContext.Session.GetInt32("loggedInUser") == null)
            {
                ModelState.AddModelError("loggedInUser", "Not signed in!");
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.UserId == (int)HttpContext.Session.GetInt32("loggedInUser"));
            ViewBag.allHobbies = _context.Hobbies.Include(d => d.MyUser).Include(r => r.ParticipantAt).ToList();
            return View("New");
        }

        [HttpPost("createHobby")]
        public IActionResult CreateHobby(Hobby newActivity, int hobbyId)
        {
            if (newActivity.DateTime < DateTime.Now)
            {
                ModelState.AddModelError("DateTime", "Can't be past hobbies!");
                return View("New");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.UserId == (int)HttpContext.Session.GetInt32("loggedInUser"));
            if (_context.Hobbies.Any(u => u.HobbyName == newActivity.HobbyName))
            {
                ModelState.AddModelError("HobbyName", "Activity already exist!");
                return View("New");
            }
            if (ModelState.IsValid)
            {
                newActivity.UserId = (int)HttpContext.Session.GetInt32("loggedInUser");
                _context.Add(newActivity);
                _context.SaveChanges();
                return Redirect($"/show/{newActivity.HobbyId}");
            }
            else
            {
                return View("New");
            }
        }

        [HttpGet("show/{hobbyId}")]
        public IActionResult Show(int hobbyId)
        {
            if (HttpContext.Session.GetInt32("loggedInUser") == null)
            {
                ModelState.AddModelError("loggedInUser", "Not signed in!");
                return RedirectToAction("Index");
            }
            ViewBag.allHobbies = _context.Hobbies.Include(g => g.MyUser).ToList();
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.UserId == (int)HttpContext.Session.GetInt32("loggedInUser"));
            Hobby single = _context.Hobbies.Include(f => f.ParticipantAt).ThenInclude(g => g.User).FirstOrDefault(e => e.HobbyId == hobbyId);
            return View(single);
        }

        [HttpGet("join/{hobbyId}/{userId}")]
        public IActionResult Join(int hobbyId, int userId)
        {
            if(HttpContext.Session.GetInt32("loggedInUser") == null)
            {
                ModelState.AddModelError("loggedInUser","Not signed in!");
                return RedirectToAction("Index");
            }
            if(HttpContext.Session.GetInt32("loggedInUser")!=userId)
            {
            return RedirectToAction("Logout");
            }
            Participant oneParticipant = new Participant();
            oneParticipant.HobbyId = hobbyId;
            oneParticipant.UserId = userId;
            _context.Add(oneParticipant);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("leave/{hobbyId}/{userId}")]
        public IActionResult Unjoin(int hobbyId, int userId)
        {
            if(HttpContext.Session.GetInt32("loggedInUser") == null)
            {
                ModelState.AddModelError("loggedInUser","Not signed in!");
                return RedirectToAction("Index");
            }
            if(HttpContext.Session.GetInt32("loggedInUser")!=userId)
            {
                return RedirectToAction("Logout");
            }
            Participant removeParticipant = _context.Participants.FirstOrDefault(d => d.HobbyId == hobbyId && d.UserId == userId);
            _context.Participants.Remove(removeParticipant);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("delete/{hobbyId}")]
        public IActionResult deleteHobby(int hobbyId)
        {
            Hobby deleteHobby = _context.Hobbies.SingleOrDefault(f => f.HobbyId == hobbyId);
            _context.Hobbies.Remove(deleteHobby);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
