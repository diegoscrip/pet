'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.createTable('produtos', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
},
   categoria_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'categorias', key: 'id' },
},
    nome:{
      type: Sequelize.STRING,
      unique: true,
},
    preco:{
      type: Sequelize.DECIMAL,
},
    desconto_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'descontos', key: 'id' },
},
    pet_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'pets', key: 'id' },
},
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
},
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
  },
 });
},
    down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('produtos');
}
};