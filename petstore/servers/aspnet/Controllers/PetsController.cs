using Microsoft.AspNetCore.Mvc;
using PetStore.Service.Models;

namespace PetStore.Service.Controllers
{
    [ApiController]
    public class PetsController : PetsControllerBase
    {
        internal override IPets PetsImpl => new Pets();

        public override async Task<IActionResult> Get(int petId)
        {
            if (petId > 10 || petId < 0)
            {
                return BadRequest(new PetStoreError()
                {
                    Code = 0,
                    Message = "Invalid petId"
                });
            }

            return await base.Get(petId);
        }
    }
}
