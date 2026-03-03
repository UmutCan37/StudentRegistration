using AutoMapper;
using StudentRegistration.Departments;
using StudentRegistration.Students;

namespace StudentRegistration;

public class StudentRegistrationApplicationAutoMapperProfile : Profile
{
    public StudentRegistrationApplicationAutoMapperProfile()
    {
        CreateMap<Department, DepartmentDto>();
        CreateMap<Student, StudentDto>()
            .ForMember(dest => dest.DepartmentName,
                opt => opt.MapFrom(src => src.Department.Name));
        CreateMap<CreateUpdateStudentDto, Student>();
        CreateMap<CreateUpdateDepartmentDto, Department>();
    }
}