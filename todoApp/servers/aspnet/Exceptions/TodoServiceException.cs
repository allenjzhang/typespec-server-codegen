using System.Net;
using Todo.Service.Models;

namespace Todo.Service
{
    public class TodoServiceException : Exception
    {
        public TodoServiceException(HttpStatusCode code, ApiError error)
        {
            StatusCode = code;
            Error = error;
        }

        public HttpStatusCode StatusCode { get; }

        public ApiError Error { get; }
    }
}
