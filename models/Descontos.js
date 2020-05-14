const { Model, DataTypes } = require('sequelize');

class Descontos extends Model{
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING
        }, {
            sequelize
        })
    }
}
module.exports = Descontos;
