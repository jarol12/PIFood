import styles from './styles/inputs.module.css'
import { useEffect, useState } from 'react';

const ImageInput = ({setState,state}) => {
 const[user,setUser]= useState({url:""});
const[error,setErrors]= useState({});
const[botton , setbutton] = useState(false)


const handleChange=(event)=>{
    setUser({[event.target.name]: event.target.value });
   }

useEffect(()=>{
if(botton){
setErrors(validate(user));//--
if(!error.url){
  setState({...state,...user,validate:true})
 }else{
     setState({...state,...user,validate:false})
 }}
},[botton, error.url, setState, state,user])





function validate (user){
    const errores = {};
    if(!/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g.test(user.url)){ errores.url = "Url incorrect"
    }
    return errores
}



    return (
       <div className={styles.container}><br/>
        <label>Portada:</label> <input style={{marginTop:"20px"}}  name="url" type="text" placeholder='Enter la url de la imagen'  onChange={(event)=> handleChange(event)} onClick={()=>setbutton(true)}/>
        {error.url && <h5> {error.url} </h5>}
         
        </div>
    );
};

export default ImageInput;