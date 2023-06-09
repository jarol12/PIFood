const {Api_Key,Api} = process.env
const {Recipe} = require("../../db");
const axios = require('axios')
const getDiets = async(req,res) =>{
  const {id} = req.params
    try {
      let dataDb;
      if(id.length>12){
      dataDb = await Recipe.findByPk(id)
      res.status(200).json(dataDb)
    }else{
      dataDb= await axios.get(`https://api.spoonacular.com/recipes/${id}/information/?apiKey=${Api_Key}`)
      const data = {
        id : dataDb.data.id,
        name: dataDb.data.title,
        resumen: dataDb.data.summary,
        Nivel_food: dataDb.data.healthScore,
        paso_paso: dataDb.data.instructions,
        imagen: dataDb.data.image,
        diets: dataDb.data.diets,
        porciones:dataDb.data.servings,
        ingredientes: dataDb.data.extendedIngredients.map(ingrediente => ingrediente.original)
      }
      res.status(200).json(data)
    }
    } catch (error) {
      res.status(404).json({error:`No se pudo encontrar la receta con ese id = ${id}`})
    }
}



module.exports = getDiets