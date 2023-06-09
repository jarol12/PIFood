const {Router} = require ('express')
const getDiets = require('../handlers/Diets/getDiets.js')

const router = Router()

router.get("/", getDiets)


module.exports = router