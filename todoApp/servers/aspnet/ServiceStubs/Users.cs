using System.Net;
using Todo.Service.Models;

namespace Todo.Service
{
    public class Users : IUsersOperations
    {
        private const HttpStatusCode _invalidUserCode = HttpStatusCode.UnprocessableEntity;
        private const HttpStatusCode _conflictCode = HttpStatusCode.Conflict;

        public Task<UserCreatedResponse> CreateAsync(User user)
        {
            if (user.Id < 0)
            {
                throw new TodoServiceException(_invalidUserCode, new InvalidUserResponse()
                {
                    Message = "Invalid user id"
                });
            }
            if (user.Id > 10)
            {
                throw new TodoServiceException(_conflictCode, new UserExistsResponse()
                {
                    Message = "User already exists"
                });
            }
            return Task.FromResult(new UserCreatedResponse 
            { 
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Password = user.Password,
                Validated = user.Validated,
                Token = $"{user.Id}-{user.Username}"
            });
        }
    }
}