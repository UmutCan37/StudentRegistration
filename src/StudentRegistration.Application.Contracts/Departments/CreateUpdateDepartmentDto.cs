using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentRegistration.Departments
{
    public class CreateUpdateDepartmentDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int Quota { get; set; }
    }
}
