using System;
using System.ComponentModel.DataAnnotations;

namespace activityCenter.Models

{
    public class LoginUser

    {
        [Required]
        [EmailAddress]
        [Display(Name = "login email")]
        public string logEmail { get; set; }
        [Required]
        [Display(Name = "password")]
        [DataType(DataType.Password)]
        public string logPassword { get; set; }
    }
}