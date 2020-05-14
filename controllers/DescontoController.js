const Descontos = require('../models/Descontos');
module.exports = {

    async index (req, res){
        const descontos = await Descontos.findAll();
        return res.json(descontos);
    },
    async store(req, res){
        const { nome } = req.body;
        try{ 
        const descontos = await Descontos.create({ 
            nome 
        });
        return res.json(descontos);
        } catch(err){
            return res.json({error:err});
        }
    }
   
};