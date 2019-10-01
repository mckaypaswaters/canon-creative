const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body

        const user = await db.find_username(username)
        if(user[0]) return res.status(200).send({message: 'Username already in use'})

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [userId] = await db.create_user({username, password: hash})

        res.status(200).send({message: 'Successfully Registered', user: userId})
    },
    async login(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body

        const user = await db.find_username(username)
        if (!user[0]) return res.status(200).send({message: 'Username does not exist'})

        const result = bcrypt.compareSync(password, user[0].hash)
        if (!result) return res.status(200).send({message: 'Incorrect password'})
        
        res.status(200).send({message: 'Logged in!', user: user})
    }
}