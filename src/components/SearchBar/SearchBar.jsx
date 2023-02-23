import React from 'react';
import style from "./SearchBar.module.css";
import { useState } from 'react';

 function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("")
 
   const handlerChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className= {style.container}>
         <hr className={style.borde} ></hr>
          <input type='search' value={character} onChange={handlerChange} />
      <button className= {style.boton} onClick={ () => onSearch(character) }>Agregar</button> 
      </div>
   );
}

export default SearchBar;
/* CON LA ARROW FUCTION, AL EJECUTARSE HACIENDO CLIC EN EL BOTON, ESTA EJECUTA LA FUNCION DE ADENTRO*/