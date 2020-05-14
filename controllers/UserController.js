const User = require('../models/User');
const jwt = require('jsonwebtoken');
module.exports = {
    async index(req, res){
        const users = await User.findAll();
        return res.json(users);
    },
    async show(req, res) {
        const token = req.headers["authorization"];
        const decode = await jwt.verify(token, '12345');      
        const user = await User.findByPk(decode.user_id);
        return res.json(user);
    },
    async store(req, res){
        const { nome, email, senha } = req.body;
        
        try {
            const user = await User.create({
                nome, 
                email, 
                senha 
            });
            return res.json(user);
        } 
        catch(err){
            return res.json({error: err})
        }
    },
    async login (req, res){
        const { email, senha } = req.body;
        try {
            const user = await User.findOne({ where: { email, senha } });
            // console.log(user.id);
            let token = await jwt.sign({ user_id: user.id }, '12345');
            return res.json({ token });
        }catch(err){
            return res.json({error:err});
        }
    },
};