const { Router } = require('express');
const { getAll } = require('../controllers/apiGet');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getAll);
router.get('/:id', getAll);

module.exports = router;
