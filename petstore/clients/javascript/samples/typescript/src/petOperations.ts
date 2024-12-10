import { PetStoreClient } from '@unbranded/petstore';

const client = new PetStoreClient("http://localhost:5118",{
    allowInsecureConnection: true
});
async function main() {
  // list all pets
  const result = await client.pets.list();
  console.log(result);

  // create a pet
  await client.pets.create({name: 'Test', age: 5, ownerId: 5});
  
  // get a pet
  await client.pets.get(2);
  
  // update a pet
  await client.pets.update(2,{name: 'Test', age: 5, ownerId: 5});

  // delete a pet
  await client.pets.delete(1)
}

main().catch(console.error);