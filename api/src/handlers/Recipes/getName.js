const { default: axios } = require("axios")
const {Recipe, Diet} = require("../../db")
const {Api_Key,Api} = process.env
const { Op } = require("sequelize")


const getName = async(req,res) =>{
    const {name} = req.query

    try {
      if(name){
      const toMin = name.toLowerCase()
      const getData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}?&apiKey=${Api_Key}&addRecipeInformation=true&number=100`)
      const data_api = getData.data.results.map(recipe =>{
        return{
          id:recipe.id,
          imagen:recipe.image,
          nombre:recipe.title,
          diets:recipe.diets,
          healthScore :recipe.healthScore
        }
      }
      )
      const getData_Db= await Recipe.findAll({
      include:[
        {
          model:Diet,
          through:{
            attributes:[]
          }
        },
      ],
      where:{
        name:{[Op.like]:`%${toMin}%`}
      }
    }
    )

    const concat  = getData_Db.concat(data_api)
    res.status(200).json(concat)
  }else{
    const data_recipes= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_Key}&addRecipeInformation=true&number=100`)
    const data_api = data_recipes.data.results.map(recipe =>{
      return{
        id:recipe.id,
        imagen:recipe.image,
        nombre:recipe.title,
        diets:recipe.diets,
        healthScore :recipe.healthScore
      }
    }
    )
    const recipeDb= await Recipe.findAll({
      include:[
        {
          model:Diet,
          through:{
            attributes:[]
          },
          attributes:['name']
        },
      ],
     }
    )
    const responseDb = recipeDb.map(recipe =>{
     return {
      id:recipe.id,
      nombre: recipe.name,
      imagen: recipe.imagen,
      resumen_plato:recipe.resumen_plato,
      healthScore: recipe.Nivel_food,
      paso_paso:recipe.paso_paso,
      diets: recipe.diets.map(diet => diet.name)
     }
    })
    const join_data = data_api.concat(responseDb)
    res.status(200).json(join_data)
  }
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


module.exports = getName