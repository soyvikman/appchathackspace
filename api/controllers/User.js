const user = require('./../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.userPost = async (req,res)=>{
    const {user_name, user_lastname, user_password, user_avatar, user_email } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user_password, salt);
    try{
        const results = await user.create({
                user_name,
                user_lastname,
                user_password: hash,
                user_avatar,
            user_email
            }, {fields: ['user_name', 'user_lastname', 'user_password', 'user_avatar','user_email']});
        res.status(200).json(results)
    } catch (e){
        res.status(400).json(e)
    }
}

exports.userLogin = async (req,res)=>{
    const {user_email, user_password} = req.body;
    const findUser = await user.findOne({ where: { user_email: user_email } });
    if(findUser !== null){
        const hash = await user.findOne({where:{user_email: user_email}})
        bcrypt.compare(user_password, hash.user_password, function(err, response) {
            if(response === true){
                const payload = {
                    nombre: hash.user_name,
                    apellido: hash.user_lastname,
                    email: hash.user_email,
                    avatar: hash.user_avatar
                }
                const token = jwt.sign(payload, 'Secret Password', {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                })
                res.status(200).json({token})
            } else {
                res.status(400).json({"msg":"Contraseña Incorrecta"})
            }
        });

    } else {
        res.status(400).json({"error": "No existe en la DB un usuario con ese email."})
    }
}