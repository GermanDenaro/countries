const { Router } = require('express');
const countries = require('./countries');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = { index: router, countries };
