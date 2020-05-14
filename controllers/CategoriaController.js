const Categorias = require('../models/Categorias');
module.exports = {

    async index (req, res){
        const categorias = await Categorias.findAll();
        return res.json(categorias);
    },
    async store(req, res){
        const { nome } = req.body;
        try{ 
        const categorias = await Categorias.create({ 
            nome 
        });
        return res.json(categorias);
        } catch(err){
        return res.json({error: err});
        }
    }
   
};