import pytest
from petstore import PetStoreClient

@pytest.fixture
def client():
    return PetStoreClient()

def test_pets(client):
    result = list(client.pets.list())
    assert len(result) == 2