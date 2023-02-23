import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite, } from "../../redux/actions";
import style from "./Card.module.css";


function Card ({ name, gender, onClose, species, image, id }) {
    const dispatch = useDispatch();

    const myFavorites = useSelector(state => state.myFavorites);

    const [isFav, setIsFav] = useState (false);

         const handlerFavorite = () => {
             if (isFav) {
              setIsFav(false);
              dispatch(deleteFavorite(id))
            }
            else {
                setIsFav(true);
                dispatch(addFavorite({name, gender, onClose, species, image, id}) )

            }
         }
          
          useEffect(() => {
            myFavorites.forEach((fav) => {
                if (fav.id === id) {
                setIsFav(true);
                }
            });
          }, [myFavorites]);


         return(
        <div className={style.card} >
            {
              isFav ? (
                <button onClick={handlerFavorite}>❤️</button>
              ) : (
                <button onClick={handlerFavorite}>🤍</button>
                )
            }
            
             <div className={style.front} >
               <img src={image} alt={name} style={{ borderRadius: '9999999999rem' }} />
             </div>
              
             <div className={style.back}> 
            </div>
              <Link to={`/detail/${id}`} className={style.link} >
                  <h2 className={style.name}>{name}</h2>
              </Link>
              
              <div className={style.species} >
                  <h2>Specie: {species}</h2>
                  <h2>Gender: {gender}</h2>
             </div>

             
             <div className={style.btn} >
                  <button onClick={onClose}>X</button>
             </div>

             </div>
        
    )
}


export default Card;

