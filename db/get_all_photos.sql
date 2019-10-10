SELECT g.gallery_id, g.img, g.name, g.users_id, u.username FROM gallery g
JOIN users u ON g.users_id = u.id
ORDER BY gallery_id ASC;