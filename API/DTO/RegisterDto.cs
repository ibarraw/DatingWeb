using System.ComponentModel.DataAnnotations;

namespace API.DTO
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string KnownAs { get; set; }
        [Required]
        public string Gender { get; set; }

        //DateOnly is a new type in C# 9.0 and we are making it nullable to make it work as the DateOnly
        //type is not nullable by default as it uses the current date if no date is provided
        [Required]
        public DateOnly? DateofBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }


        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }

    }
}
