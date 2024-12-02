using System.ClientModel;
using System.Text.Json;

namespace PetStore.Tests
{
    public class PetsClientTests
    {
        private Pets _petsClient;

        [OneTimeSetUp]
        public void Setup()
        {
            _petsClient = new PetStoreClient(new Uri("http://localhost:5118")).GetPetsClient();
        }

        [Test]
        public async Task Validate_GetPet_Succeeded()
        {
            var response = await _petsClient.GetAsync(0);
            Assert.NotNull(response);
            Assert.NotNull(response.Value);
            Assert.AreEqual(0, response.Value.Id);
            Assert.AreEqual("Kiwi", response.Value.Name);
            Assert.AreEqual(null, response.Value.Tag);
            Assert.AreEqual(5, response.Value.Age);
            Assert.AreEqual(5, response.Value.OwnerId);
        }

        [Test]
        public async Task Validate_GetPet_Failed()
        {
            var exception = Assert.ThrowsAsync<ClientResultException>(async () => await _petsClient.GetAsync(100));

            Assert.NotNull(exception);
            Assert.AreEqual(400, exception.Status);

            var response = exception.GetRawResponse();
            Assert.NotNull(response);
            Assert.NotNull(response?.ContentStream);
            using var doc = JsonDocument.Parse(response.ContentStream);
            Assert.AreEqual(0, doc.RootElement.GetProperty("code").GetInt32());
            Assert.AreEqual("Invalid petId", doc.RootElement.GetProperty("message").GetString());
        }
    }
}