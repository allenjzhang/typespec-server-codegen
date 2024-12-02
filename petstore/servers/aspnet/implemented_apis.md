# Implemented operations and behaviors

## `Pets`

### `Pets.get`

- Endpoint: `/pets/{petId}`

- Returns:

| petId | HTTP Code | Response body |
| :-- | :-- | :-- |
| 0 <= petId < 10 | 200 | `{ "id": petId, "age": 5, "name": "Kiwi", "ownerId": 5 }` |
| others | 400 | `{ "code": 0, "message": "Invalid petId" }` |