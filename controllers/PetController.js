const Pets = require('../models/Pets');
module.exports = {

    async index(req, res){
        const pets = await Pets.findAll();
        return res.json(pets);
    },
    async store(req, res){
        const { nome, icone } = req.body;
        try{
        const pets = await Pets.create({ 
            nome,
            icone 
        });
        return  res.json(pets);
        } catch(err){
        return res.json({error: err});
        }
    }
   
};