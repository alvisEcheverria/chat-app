const { UsersServices } = require('../services'); 
const transporter = require('../utils/mailer');
const welcomeTemplate = require('../templates/welcome');

const userRegister = async (req, res, next) =>{
    try {
        const newUser = req.body;
        const result = await UsersServices.create(newUser);
        res.status(201).json(result);
        transporter.sendMail({
            from: '<alvis.cm@gmail.com>',
            to: result.email,
            subject: 'Bienvenido a chatapp',
            text: `Hola ${result.firstName} ${result.lastName}, bienvenido a la mejor aplicación de mensajería jamás antes vista`,
            html: welcomeTemplate()
        })
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos'
        })
    }
}

const getAllUsers = async (req, res, next) =>{
    try {
        const offset = req.query.offset ?? 0;
        const limit = req.query.limit ?? 3;
        const users = await UsersServices.getAll(offset, limit);
        res.json(users)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Algo salió mal'
        })
    }
}

module.exports = {
    userRegister,
    getAllUsers
}