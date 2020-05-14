const { Model, DataTypes} = require('sequelize');

class Pets extends Model{
    static init(sequelize){
        super.init({
         nome: DataTypes.STRING,
         icone: DataTypes.STRING
        },
      { 
           sequelize
    })
}
}
module.exports = Pets;