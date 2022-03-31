using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace activityCenter.Models
{
    public class Hobby
    {
        [Key]
        public int HobbyId { get; set; }

        [Required]
        [Display(Name = "Activity")]
        public string HobbyName { get; set; }
        [Display(Name = "Date Time")]
        [DataType(DataType.Date)]
        public DateTime DateTime { get; set; }

        [Required]
        [Range(1, 59, ErrorMessage = "Must be between 1 and 59")]
        public int Duration { get; set; }

        [Required]
        public string Description { get; set; }
        public int UserId { get; set; }
        public User MyUser { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<Participant> ParticipantAt { get; set; }
    }
}