module.exports = {
    getAllPhotos: async (req, res) => {
        const db = req.app.get('db')
        const photos = await db.get_all_photos()
        res.status(200).send(photos)
    }
}