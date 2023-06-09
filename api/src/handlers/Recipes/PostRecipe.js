const {Recipe} = require("../../db")

const postRecipe = async(req, res) =>{
   const {
    name,
    imagen,
    resumen_plato,
    Nivel_food,
    paso_paso,
    dietsId
   }= req.body

   try {
    const create_db = {
      name:name.toLowerCase(),
      imagen,
      resumen_plato,
      Nivel_food,
      paso_paso
    }
   const Post_recipe =  await Recipe.create(create_db)
   await Post_recipe.addDiet(dietsId)
   res.status(202).send("se ha creado correctamente tu receta")
   } catch (error) {
    res.status(404).json({error:error.message})
   }

}


module.exports = postRecipe