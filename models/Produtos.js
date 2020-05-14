const { Model, DataTypes } = require('sequelize');

class Produtos extends Model{
    static init(sequelize){
        super.init({
         nome: DataTypes.STRING,
         categoria_id: DataTypes.INTEGER,
         preco: DataTypes.DECIMAL,
         desconto_id: DataTypes.INTEGER,
         pet_id: DataTypes.INTEGER
        },
      { 
           sequelize
    })
}
}
module.exports = Produtos;