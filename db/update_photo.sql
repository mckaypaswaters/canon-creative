UPDATE gallery
SET img = $1,
name = $2
WHERE gallery_id = $3;