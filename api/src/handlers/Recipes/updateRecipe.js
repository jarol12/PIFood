const {Recipe} = require("../../db")
const putRecipe = async (req,res) =>{
 const {id} =  req.params
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
      name,
      imagen,
      resumen_plato,
      Nivel_food,
      paso_paso
    }

    const recipe = await Recipe.findByPk(id);
        recipe.set(create_db);

        await recipe.save();
        await recipe.setDiets(dietsId);

   res.status(201).send("se actualizo correctamente tu receta")
 } catch (error) { 
  res.status(404).send("se actualizo correctamente tu receta")
 }
}

module.exports = putRecipe