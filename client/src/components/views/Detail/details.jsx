import { useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {getRecipesId,cleanRecipes} from '../../../Redux/Actions/index'
import styles from "./detail.module.css"
import { useParams} from "react-router-dom";
import board from '../../../utils/board.jpg'
import {ImSpoonKnife} from 'react-icons/all'

//import Loading from "../Loading/loading.jsx";


export default function Details() {
 
  const dispactch = useDispatch()
  const recipeId =  useSelector((store)=>(store.dataId))



  const { id } = useParams();
  useEffect(() => {
    dispactch(getRecipesId(id))
     return ()=>{
       dispactch(cleanRecipes())
     }

  }, [dispactch,id]);

  function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();

    return str.replace( /(<([^>]+)>)/ig, '');
}

let clean_str;
if(recipeId.resumen){
clean_str = removeTags(recipeId.resumen)
}



  return (
    <div className={styles.container} style={{backgroundImage:`url(${board})`}}>
      <div className= {styles.container_recipe}>
      <h1>{recipeId?recipeId.name:null}</h1>
      <div>
      <div className={styles.data_img}>
        <div className={styles.container_img}>
          <img src={recipeId?recipeId.imagen:null} alt={recipeId.name} />
          <figcaption>Receta  #{recipeId?recipeId.id:null}</figcaption>
        </div>
        <div>
          <strong><p><ImSpoonKnife/> {recipeId.porciones?recipeId.porciones:4} porciones</p> </strong>
          Dietas : 
          <ul>{recipeId.diets?recipeId.diets.map(diet => {
          return <li key = {recipeId.id}>{diet}</li>
          }):null}</ul>
          <p><strong>Puntuación de salud : {recipeId.Nivel_food?recipeId.Nivel_food:"not found"}</strong>{}</p>
        </div> 
      </div>
      </div>
      <div>
      <p>{clean_str?clean_str:null}</p>
      <p >{recipeId.resumen_plato?recipeId.resumen_plato:null}</p>
      </div>
      <div>
      <h1>Ingredientes</h1>
      <ul>{recipeId.ingredientes?recipeId.ingredientes.map(ing =>{
        return <li key = {recipeId.id} >{ing}</li>
      }):"not found"} </ul>
      <h1>Instrucciones</h1>
      <p>{recipeId?recipeId.paso_paso:"Las instrucciones no están disponible"} </p>
      </div>
      </div>
     
  </div>
  );
}