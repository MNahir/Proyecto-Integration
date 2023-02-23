import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = ({login}) => {

   const [userData, setUserData] = useState ({
       username: "",
       password: "",
   })
  
    const [errors, setErrors] = useState ({
        username: "",
        password: "",
   })

    const handlerInputChange = (event) => {
       setUserData ({
        ...userData,
        [event.target.name]: event.target.value
       })
       setErrors(validation({
       ...userData,
       [event.target.name]: event.target.value
       }))
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form className={style.fondo} onSubmit={handlerSubmit} >
            <label htmlFor="username" style={{color:"black"}} >Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handlerInputChange} />
            {errors.username && <p style={{color:"red"}} > {errors.username}</p>} 
    
            <label htmlFor="password" style={{color:"black"}} >Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handlerInputChange} />
            {errors.password && <p style={{color:"red"}} > {errors.password}</p>} 

            <button>LOGIN</button>

        </form>
    ) 
}

export default Form;