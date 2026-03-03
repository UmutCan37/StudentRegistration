using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace StudentRegistration.Students
{
    public class StudentAppService :
        CrudAppService<Student, StudentDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateStudentDto>,
        IStudentAppService
    {
        public StudentAppService(IRepository<Student, Guid> repository)
            : base(repository) { }

        protected override async Task<IQueryable<Student>> CreateFilteredQueryAsync(
            PagedAndSortedResultRequestDto input)
        {
            return (await Repository.GetQueryableAsync())
                .Include(s => s.Department);
        }
    }
}
