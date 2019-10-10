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

INSERT INTO gallery (img, name, users_id)
VALUES ('https://i.ytimg.com/vi/BEm8MzrdkJ0/maxresdefault.jpg', 'Sup', 22);

DELETE FROM gallery
WHERE gallery_id = 10;

UPDATE gallery
SET img = 'https://emorywheel.com/wp-content/uploads/2019/03/AJR-Jim-Metzger_Hi-Res-2-1600x1068.jpg',
name = 'AJR'
WHERE gallery_id = 14;

SELECT g.gallery_id, g.img, g.name, g.users_id, u.username FROM gallery g
JOIN users u ON g.users_id = u.id
ORDER BY gallery_id ASC;