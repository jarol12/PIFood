import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';

const ResumenInput = ({setState, state}) => {
    
const[user,setUser]= useState({description:""});
const[error,setErrors]= useState({});
const[botton , setbutton] = useState(false)

const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });
}

useEffect(()=>{
if(botton){
setErrors(validate(user));//--
if(!error.description){
 setState({...state,...user,validate:true})
}else{
    setState({...state,...user,validate:false})
}}
},[botton,state,setState,error.description,user])


function validate (user){
    const errores = {};
    if(user.description.length > 1500){
        errores.description= "Descripción demasiada larga"
    }else if(!user.description.length){
        errores.description = 'El campo no puede estar vacío'
    }else if(user.description.length < 500){
        errores.description = 'La descripción debe tener por lo menos 500 caracteres'
    }
    return errores
    }
    

    return (
       <div className={styles.container}>
        <label for="email">Describe tu receta: <br/> <textarea style={{marginTop:"20px"}}  id="bio" name="description" rows="3" cols="30"  onChange={(event)=> handleChange(event)} onClick={()=>setbutton(true)}></textarea></label>
        {error.description && <h5> {error.description} </h5>}
        
        </div>
    );
};

export default ResumenInput;