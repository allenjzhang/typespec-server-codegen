using Microsoft.AspNetCore.Mvc;

namespace Todo.Service.Controllers
{
    [ApiController]
    public class AttachmentsOperationsController : AttachmentsOperationsControllerBase
    {
        internal override IAttachmentsOperations AttachmentsOperationsImpl => new AttachmentsOperations();
    }
}
