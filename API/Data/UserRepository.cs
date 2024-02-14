using API.DTO;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserRepository(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<MemberDto> GetMemberAsync(string username)
        {
            //With automapper
            return await _context.Users
                .Where(x => x.UserName == username)
                .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();

            //Without automapper
            //return await _context.Users
            //    .Where(x => x.UserName == username)
            //    .Select(user => new MemberDto
            //    {
            //        Id = user.Id,
            //        UserName = user.UserName
            //    }).SingleOrDefaultAsync();
        }

        public async Task<PagedList<MemberDto>> GetMembersAsync(UserParams userParams)
        {
            var minDob = DateOnly.FromDateTime(DateTime.Today.AddYears(-userParams.MaxAge - 1));
            var maxDob = DateOnly.FromDateTime(DateTime.Today.AddYears(-userParams.MinAge));

            var query = _context.Users
                                .Where(u => u.UserName != userParams.CurrentUsername &&
                                            u.Gender == userParams.Gender &&
                                            u.DateOfBirth >= minDob &&
                                            u.DateOfBirth <= maxDob)
                                .AsQueryable(); //Start with filtering the users

            //Apply ordering based on userParams or another criteria
            switch (userParams.OrderBy)
            {
                case "created":
                    query = query.OrderByDescending(u => u.Created);
                    break;
                default:
                    query = query.OrderByDescending(u => u.LastActive);
                    break;
            }

            return await PagedList<MemberDto>
                .CreateAsync(
                    query.AsNoTracking().ProjectTo<MemberDto>(_mapper.ConfigurationProvider),
                    userParams.PageNumber,
                    userParams.PageSize
                );

            ////ProjectTo does not eagerly load related data
            ////However, the performance gain is not significant
            //return await _context.Users
            //    .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
            //    .ToListAsync();
        }

        public async Task<AppUser> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<AppUser> GetUserByUsernameAsync(string username)
        {
            //eager loading
            return await _context.Users.Include(p => p.Photos).SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<string> GetUserGender(string username)
        {
            return await _context.Users
                .Where(x => x.UserName == username)
                .Select(x => x.Gender)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _context.Users.Include(p => p.Photos).ToListAsync();
        }

        public void Update(AppUser user)
        {
            _context.Entry(user).State = EntityState.Modified;
        }
    }
}
