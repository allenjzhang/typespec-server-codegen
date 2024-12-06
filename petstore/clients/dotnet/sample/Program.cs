using PetStore;
using PetStore.Models;
using System.ClientModel;

var petClient = new PetStoreClient(new Uri("http://localhost:5118")).GetPetsClient();

// create a pet
var pet = await petClient.CreateAsync(new PetCreate("Kiwi", 5, 0));
Console.WriteLine($"Created pet: {pet.Value.Id}");

// get a pet from id
var petFromId = await petClient.GetAsync(pet.Value.Id);
Console.WriteLine($"Got pet: {petFromId.Value.Name}");

// update the update by id
var updatedPet = await petClient.UpdateAsync(pet.Value.Id, BinaryContent.Create(BinaryData.FromObjectAsJson(new
{
    name = "Coco",
    ownerId = 314,
    tag = "changed"
})));
Console.WriteLine("Pet updated.");

// list all available pets
var listResult = await petClient.ListAsync();
foreach (var p in listResult.Value.Value)
{
    Console.WriteLine($"Pet: {p.Name}");
}

// delete the pet by id
await petClient.DeleteAsync(pet.Value.Id);
Console.WriteLine("Pet deleted.");
