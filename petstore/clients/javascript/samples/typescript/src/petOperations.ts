import { PetStoreClient } from '@unbranded/petstore';

const client = new PetStoreClient("http://localhost:5118", {
  allowInsecureConnection: true
});

async function main() {
  // list all pets
  const result = await client.pets.list();
  console.log(result);

  // create a pet, return a pet
  const createPet = await client.pets.create({ name: 'Test', age: 5, ownerId: 5 });
  console.log(createPet);

  // get a pet, return a pet
  const getPet = await client.pets.get(2);
  console.log(getPet);

  // update a pet, return a pet
  const updatePet = await client.pets.update(2, { name: 'Test', age: 5, ownerId: 5 });
  console.log(updatePet);

  // delete a pet, return undefined
  await client.pets.delete(1);
}

main().catch(console.error);