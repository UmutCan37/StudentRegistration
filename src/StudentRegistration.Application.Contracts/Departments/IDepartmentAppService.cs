using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace StudentRegistration.Departments
{
    public interface IDepartmentAppService :
        ICrudAppService<DepartmentDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateDepartmentDto>
    {
    }
    
}
