import { ADD_FAVORITE, DELETE_FAVORITE, CLEAN_CHARACTER_DETAIL, FILTER, ORDER} from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
    
    return async (dispatch) => {
         const response = await axios.post("http://localhost:3001/rickandmorty/fav", character);
         const data = response.data;

         return dispatch ({
            type:ADD_FAVORITE,
            payload: data
         })
    
        }
}


export const deleteFavorite = (id) => {
    
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
        const data = response.data;

         return dispatch ({
            type:DELETE_FAVORITE,
            payload: data
         })
   
    }
}


export const cleanCharacterDetail = () => {
    return { type: CLEAN_CHARACTER_DETAIL }
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
}