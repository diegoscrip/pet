const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Categorias = require('../models/Categorias');
const Produtos = require('../models/Produtos');
const Pets = require('../models/Pets');
const Descontos = require('../models/Descontos');

const connection = new Sequelize(dbConfig);

User.init(connection);
Categorias.init(connection);
Produtos.init(connection);
Pets.init(connection);
Descontos.init(connection);

module.exports = connection;