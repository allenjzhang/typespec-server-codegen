using Microsoft.AspNetCore.Mvc;
using Todo.Service.Models;

namespace Todo.Service.Controllers
{
    [ApiController]
    public class UsersOperationsController : UsersOperationsControllerBase
    {
        internal override IUsersOperations UsersOperationsImpl => new Users();

        [UserCreateModelValidation]
        public override Task<IActionResult> Create(User body)
        {
            return base.Create(body);
        }
    }
}
