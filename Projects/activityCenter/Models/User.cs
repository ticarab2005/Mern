using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace activityCenter.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        [Display(Name = "Name")]
        [MinLength(2, ErrorMessage = "Name must have at least 2 characters!")]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(8, ErrorMessage = "Password must have at least 8 characters!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Hobby> HobbiesList { get; set; }
        public List<Participant> ParticipantsList { get; set; }

        [NotMapped]
        [DataType(DataType.Password)]
        [Compare("Password")]
        public string Confirm { get; set; }

    }
}