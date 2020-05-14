const express = require('express');
const UserController = require('../controllers/UserController');
const CategoriaController = require('../controllers/CategoriaController');
const ProdutoController = require('../controllers/ProdutoController');
const PetsController = require('../controllers/PetController');
const DescontosController = require('../controllers/DescontoController');
const jwt = require('jsonwebtoken');

const router = express.Router();

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader;

        jwt.verify(token, '12345', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

router.post('/login', UserController.login)

router.get('/my_user', authenticateJWT, UserController.show)



router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.get('/categorias', authenticateJWT, CategoriaController.index);
router.post('/categorias', CategoriaController.store);
router.get('/produtos', ProdutoController.index);
router.post('/produtos', ProdutoController.store);
router.get('/pets', PetsController.index);
router.post('/pets', PetsController.store);
router.get('/descontos', DescontosController.index);
router.post('/descontos', DescontosController.store);

module.exports = router;