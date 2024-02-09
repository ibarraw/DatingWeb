using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;

namespace API.Helpers
{
    //this is a service filter that will be used to update the last active property of the user when they make a request to the API
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var resultContext = await next();

            if (!resultContext.HttpContext.User.Identity.IsAuthenticated) return; //probably not needed
            //get the user id from the token and then get the user from the database
            var userId = resultContext.HttpContext.User.GetUserId();
            var repo = resultContext.HttpContext.RequestServices.GetService<IUserRepository>();
            var user = await repo.GetUserByIdAsync(int.Parse(userId));

            //then update the last active property of the user
            user.LastActive = DateTime.UtcNow;
            await repo.SaveAllAsync();
        }
    }
}
