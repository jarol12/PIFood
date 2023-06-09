const {Router} =  require ('express')
const  getId =  require('../handlers/Recipes/getId.js')
const  getName =  require('../handlers/Recipes/getName.js')
const  postRecipe = require('../handlers/Recipes/PostRecipe.js')
const update = require('../handlers/Recipes/updateRecipe.js')

const router = Router()

router.get("/:id", getId)
router.get("/", getName)
router.post("/", postRecipe)
router.put('/updatePost/:id',update)




module.exports = router
