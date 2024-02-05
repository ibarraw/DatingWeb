using API.DTO;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {

        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            //this is with automapper
            return Ok(await _userRepository.GetMembersAsync());


            //this is without automapper
            //var users = await _userRepository.GetUsersAsync();

            //var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

            //return Ok(usersToReturn);

        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            //this is with automapper
            return await _userRepository.GetMemberAsync(username);

            //this is without automapper
            //var user = await _userRepository.GetUserByUsernameAsync(username);
            //return _mapper.Map<MemberDto>(user);

        }
    }
}
