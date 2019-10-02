CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    hash TEXT
);

-- INSERT INTO users (username, hash)
-- VALUES ('brian', 'brian');

SELECT * FROM users
WHERE username = 'brian';

DROP TABLE IF EXISTS gallery;

CREATE TABLE gallery (
    gallery_id SERIAL PRIMARY KEY,
    img TEXT,
    name VARCHAR(100),
    users_id INT REFERENCES users(id)
);

SELECT * FROM gallery;