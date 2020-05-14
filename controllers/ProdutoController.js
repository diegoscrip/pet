const Produto = require('../models/Produtos');
module.exports = {   
    async index (req, res){
        const produtos = await Produto.findAll();
        return res.status(200).send(produtos);
    },
    async store (req, res){
        const {nome, preco, categoria_id, desconto_id, pet_id} = req.body;
       try{
        const produto = await Produto.create({ 
            nome,
            preco,
            categoria_id,
            desconto_id,
            pet_id
        });
        return res.json(produto);
    }catch(err){
        return res.json({error: err})
        ;
    }
    }
};