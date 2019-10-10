module.exports = {
    getAllPhotos: async (req, res) => {
        const db = req.app.get('db')
        const photos = await db.get_all_photos()
        res.status(200).send(photos)
    },
    createPhoto: async (req, res) => {
        const db = req.app.get('db')
        const {img, name, users_id} = req.body
        const photo = await db.create_photo([img, name, users_id])
        res.status(200).send(photo)
    }, 
    deletePhoto: async (req, res) => {
        const db = req.app.get('db')
        const {gallery_id} = req.params
        const deletePhoto = await db.delete_photo(gallery_id)
        res.status(200).send(deletePhoto)
    },
    updatePhoto: async (req, res) => {
        const db = req.app.get('db')
        const {gallery_id} = req.params
        const {name, img} = req.body
        const updatePhoto = await db.update_photo([img, name, gallery_id])
        res.status(200).send(updatePhoto)
    }
}