import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';

const ResumenInput = ({setState, state}) => {
    
const[user,setUser]= useState({receta:""});
const[error,setErrors]= useState({});
const[botton , setbutton] = useState(false)

const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });

}


useEffect(()=>{
if(botton){
setErrors(validate(user))
if(!error.receta){
 setState({...state,...user,validate:true})
}else{
    setState({...state,...user,validate:false})
}}
},[user,botton,error.receta, setState, state])


function validate (user){
    const errores = {};
    if(!user.receta.length){
        errores.receta = 'El campo no puede estar vacío'
    }
    return errores
    }
    

    return (
       <div className={styles.container}>
        <label for="email">Receta: <br/> <textarea style={{marginTop:"20px"}}  id="bio" name="receta" rows="3" cols="30" placeholder="Ingresa tu receta..." onChange={(event)=> handleChange(event)} onClick={ ()=> setbutton(true)} ></textarea></label>
        {error.description && <h5> {error.receta} </h5>}
        
        </div>
    );
};

export default ResumenInput;