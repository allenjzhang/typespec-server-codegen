# Implemented operations and behaviors

## `Users`

### `Users.create`

- Endpoint: `/users`

- Returns:

| condition | HTTP Code | Response body |
| :-- | :-- | :-- |
| 0 <= request.id <= 10 | 200 | echos the request, plus a `token` property in this format: `{id}-{name}` |
| request.id < 0 | 422 | `{ "code": "invalid-user", "message": "Invalid user Id" }` |
| request.id > 10 | 409 | `{ "code": "user-exists", "message": "User already exists" }` |
| request does not meet the constraint | 422 | `{ "code": "invalid-user", "message": "Invalid user data" }` |

### `Pets.create`

- Endpoint: `/pets`

- Returns:

```
{
    "id": 0,
    "age": body.age,
    "name": body.name,
    "ownerId": body.ownerId,
    "tag": body.tag
}
```

### `Pets.delete`

- Endpoint: `/pets/{petId}`

- Returns:

| petId | HTTP Code | Response body |
| :-- | :-- | :-- |
| 0 <= petId <= 10 | 200 | no body |
| petId < 0 | 400 | `{ "code": 0, "message": "Invalid petId" }` |
| petId > 10 | 404 | `{ "code": 1, "message": "Pet not found" }` |

### `Pets.list`

- Endpoint: `/pets`

- Returns:

```
{
    "value": [
        { "id": 1, "age": 5, "name": "Kiwi", "ownerId": 5 },
        { "id": 2, "age": 6, "name": "Coco", "ownerId": 6 }
    ]
}
```

### `Pets.update`

- Endpoint: `/pets/{petId}`

- Returns:

| petId | HTTP Code | Response body |
| :-- | :-- | :-- |
| 0 <= petId <= 10 | 200 | `{"id": petId, "age": body.age, "name": body.name, "ownerId": body.ownerId, "tag": body.tag}` |
| petId < 0 | 400 | `{ "code": 0, "message": "Invalid petId" }` |
| petId > 10 | 404 | `{ "code": 1, "message": "Pet not found" }` |
```