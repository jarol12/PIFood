import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';

const RatingInput = ({setState,state}) => {
  
const[user,setUser]= useState({nivel:""});
const[error,setErrors]= useState({});
const[botton, setbutton] = useState(false)

const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });
}
useEffect(()=>{
if(botton){
setErrors(validate(user));//--
if(!error.nivel){
 setState({...state,...user,validate:true})
}else{
    setState({...state,...user,validate:false})
}}
},[user,botton, error.nivel, setState, state])
    
function validate (user){
    const errores = {};
    if(!user.nivel.length){
        errores.nivel = 'Completa la Puntuación de salud'
    }else if(user.nivel> 100){
        errores.nivel = 'La puntuación no puede sey mayor a 100'
    }else if(isNaN(user.nivel)){
        errores.nivel = 'Solo ingrese números'
    }
    return errores
    }


    return (
       <div className={styles.container}><br/>
        <label>Puntuación Saludable</label> <input style={{marginTop:"20px"}} type='text'
                id='nivel-input'
                placeholder='0 - 100'
                autoComplete="off"
                name='nivel'
                onChange={(event)=> handleChange(event)} onClick={()=>setbutton(true)}/>{error.nivel && <h5>{error.nivel} </h5>}
        </div>
    

    );
};

export default RatingInput;
