INSERT INTO users (username, hash)
VALUES (${username}, ${password})
RETURNING id;