import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';
const NameInput = ({setState,state}) => {

const[user,setUser]= useState({name:""});
const[error,setErrors]= useState({});
const[botton , setbutton] = useState(false)


const handleChange=(event)=>{
 setUser({[event.target.name]: event.target.value });
}

useEffect(()=>{
if(botton){
setErrors(validate(user))
if(!error.name){
  setState({...state,...user,validate:true})
  }else{
  setState({...state,...user,validate:false})
}}
},[botton,error.name,state,user,setState])





function validate (user){
    const errores = {};
    if(user.name.length > 60){
        errores.name = "nombre  demasiado largo"
    }else if(/^\s/.test(user.name)){
        errores.name = 'El nombre no puede comenzar con espacios en blanco'
    }else if(!user.name.length){
        errores.name = 'El campo no puede estar vacío'
    }else if(user.name.length < 3){
        errores.name = 'El nombre debe tener por lo menos 3 caracteres'
    }
    return errores
    }



    return (
       <div className={styles.container}>
        <label>Nombre de la receta:</label><input style={{marginTop:"20px"}}   name="name" type="text" onChange={(event)=> handleChange(event)} onClick={()=>setbutton(true)} />
        {error.name && <h5> {error.name} </h5>}
        </div>
    );
};

export default NameInput;
