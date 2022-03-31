using System;
using System.ComponentModel.DataAnnotations;

namespace activityCenter.Models
{
    public class Participant
    {
        [Key]
        public int ParticipantId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int HobbyId { get; set; }
        public Hobby Hobby { get; set; }
    }
}