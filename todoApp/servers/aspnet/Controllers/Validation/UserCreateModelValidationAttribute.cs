using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Todo.Service.Models;

namespace Todo.Service.Controllers.Validation
{
    internal class UserCreateModelValidationAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                context.Result = new JsonResult(new InvalidUserResponse()
                {
                    Message = "Invalid user data"
                })
                {
                    StatusCode = (int)System.Net.HttpStatusCode.UnprocessableEntity
                };
            }
        }
    }
}
