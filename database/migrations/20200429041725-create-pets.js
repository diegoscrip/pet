'use strict';

module.exports = {
      up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('pets', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
},
    nome:{
      type: Sequelize.STRING,
},
    icone:{
      type: Sequelize.STRING,
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
  return queryInterface.dropTable('pets');
}
};