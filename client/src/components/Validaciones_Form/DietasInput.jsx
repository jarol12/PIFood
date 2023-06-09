import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';
import {IoCloseCircleOutline} from 'react-icons/all'
const DietsInput = ({state,setState,diets}) => {
const[error,setErrors]= useState({});
const[botton , setbutton] = useState(false)
const[dietId,setDietID]= useState([]);
const [diet, setDiet] = useState([])

 

 useEffect(()=>{
  if(botton){
  setErrors(validate())
}
},[dietId,botton,setErrors])
  
  useEffect(()=>{
  
    if(!error.diet){
      setState({...state,dietId,validate:true})
     }else{
         setState({...state,dietId,validate:false})
     }},[error,setState,state,dietId])
  

  

const handleChange = (e)=>{
 const a = diets.find((x)=>(x.name===e.target.value))
 if(diet.length>4||diet.indexOf(a.name)!==-1){

 }else{
 setDiet([...diet,a.name])
 setDietID([...dietId,a.id])
}
}




function validate ( ){
  const errores = {};
  if(diet.length > 4){
      errores.diet = "solo se permite 4 diets"
  }else if(diet.length === 0){
    errores.diet = "Ingrese al menos una diet"

  }
  return errores
  }

const handleClick =(select)=>{
const resultado = diet.filter(clean => clean !== select);
const  id = diets.find((clean )=>clean.name === select)
const resultado_id = dietId.filter(clean => clean !== id.id);
setDietID(resultado_id)
setDiet(resultado)
}




    return (
       <div className={styles.container}><br/>
        <label>Dietas</label><br/>
        <select id='diets-input'    name="referrer" onChange={(e)=>handleChange(e)} onClick={()=>setbutton(true)} >
              <option  value='default' disabled>Seleccionar dietas</option> 
              {diets.map(diet=>{
                return <option key={diet.id} value={diet.name}>{diet.name}</option>
              })}
          </select>
          <div>{diet.map(select => {
            return <p key={select}>{select}<IoCloseCircleOutline className={styles.close} onClick={() =>handleClick(select)}/></p>
          })}
          </div>
          {error.diet && <h5> {error.diet} </h5>}
        </div>
    );
};

export default DietsInput;