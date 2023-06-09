import styles from './addRecipe.module.css'
import { useEffect, useState } from "react";
import { postRecipe,getDiets, updateId, updatePost} from '../../../Redux/Actions/index';
import { useDispatch,useSelector } from 'react-redux';
import  NameInput from '../../Validaciones_Form/nameIput.jsx'
import  ResumenInput from '../../Validaciones_Form/ResumenInput.jsx'
import  NivelInput from '../../Validaciones_Form/NivelInput.jsx'
import  PasosInput from '../../Validaciones_Form/PasosInput.jsx'
import  ImagenInput from '../../Validaciones_Form/ImagenInput.jsx'
import  DietasInput from '../../Validaciones_Form/DietasInput.jsx'
import board from '../../../utils/board.jpg'
import {ImSpoonKnife} from 'react-icons/all'




export default function DetailRecipe() {

    const [validate, setValidate] = useState(null);
    const dispatch = useDispatch()
    const diets = useSelector((store)=>store.diets)
    const up = useSelector((store)=> store.updateId)

    
    useEffect(() => {
      dispatch(getDiets())
       return()=>{
        dispatch (updateId(""))
       }
    },[dispatch]);
 function createRecipe(event){
      event.preventDefault(); 
      if(validate && validate.name  && validate.nivel && validate.description && validate.url && validate.receta && validate.dietId && validate.validate){
        const dataPost = {
          name:validate.name,
          resumen_plato:validate.description,
          imagen:validate.url,
          paso_paso:validate.receta,
          Nivel_food:validate.nivel,
          dietsId:validate.dietId
        }
        if(up.length>0){
          dispatch(updatePost(up,dataPost))
      alert("La receta ha sido modificada")
      }else{
       dispatch(postRecipe(dataPost))
      alert("La informacion se posteo exitosamente.")
    }
    }else{
        alert("Faltan datos a completar")
    }
   }
  
  return (
    <div className={styles.background} style={{backgroundImage:`url(${board})`}} >
      <div className={styles.container}>
      <h4 style={{display:up.length>0?null:"none"}}><ImSpoonKnife/>Update receta #{up}</h4>
      <form className={styles.form}  onSubmit={(e)=> createRecipe(e)}>
      <fieldset>
        <NameInput state = {validate}
        setState={setValidate}/>
        <DietasInput state = {validate} setState={setValidate} diets={diets} />
        <ImagenInput  setState={setValidate} state={validate}/>
        <NivelInput state = {validate} setState={setValidate}/>
        <PasosInput state = {validate} setState={setValidate}/>
        <ResumenInput state = {validate}  setState={setValidate}/>
        </fieldset>
          <input type="submit" value="Guardar Receta" />
        </form>
      </div> 
  </div>
  );
}

















