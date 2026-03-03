using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace StudentRegistration
{
    public class Student : AuditedAggregateRoot<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NationalId { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public Guid DepartmentId { get; set; }
        public Department Department { get; set; }
    
    }
}
