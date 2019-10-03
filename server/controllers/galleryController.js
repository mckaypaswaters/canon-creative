module.exports = {
    getAllPhotos: async (req, res) => {
        const db = req.app.get('db')
        const photos = await db.get_all_photos()
        res.status(200).send(photos)
    },
    createPhoto: async (req, res) => {
        const db = req.app.get('db')
        const {img, name} = req.body
        const photo = await db.create_photo([img, name])
        res.status(200).send(photo)
    }, 
    deletePhoto: async (req, res) => {
        const db = req.app.get('db')
        const {gallery_id} = req.params
        const deletePhoto = await db.delete_photo(gallery_id)
        res.status(200).send(deletePhoto)
    }
}