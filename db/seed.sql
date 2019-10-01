CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    hash TEXT
);

-- INSERT INTO users (username, hash)
-- VALUES ('brian', 'brian');

SELECT * FROM users
WHERE username = 'brian';