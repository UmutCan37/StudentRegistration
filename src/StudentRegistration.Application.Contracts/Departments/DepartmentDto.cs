using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace StudentRegistration.Departments
{
    public class DepartmentDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public int Quota { get; set; }
    
    }
}
