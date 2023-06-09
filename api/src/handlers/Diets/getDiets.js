const axios = require('axios')
const {Diet} = require('../../db')
const {Api_Key,Api} = process.env

const getDiets = async(req,res) =>{
   try {
    const Arr = []
    const img = []
    const types_diets = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3264b1f3aef14739bc605e0c836b3800&addRecipeInformation=true`)
    types_diets.data.results.map(data =>{
        img.push(data.image)
      data.diets.map(diet => {Arr.push(diet)
      })})

    const setDiets   = new Set(Arr)
    const arr = [...setDiets]
      await arr.map((name,i) => {
      Diet.findOrCreate({
      where:{name:name, image:img[i]}}
      );
     })

    const findAll = await Diet.findAll();
    res.status(200).send(findAll);

} catch (error) {
  res.status(400).json({ error: error.message });
   }
}

module.exports = getDiets