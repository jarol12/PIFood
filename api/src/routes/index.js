const { Router } = require('express');
const  diets  = require('../controllers/Diets.js')
const recipes = require('../controllers/Recipes.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


router.use("/diets", diets)
router.use("/recipes", recipes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
