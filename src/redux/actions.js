import { ADD_FAVORITE, DELETE_FAVORITE, CLEAN_CHARACTER_DETAIL, FILTER, ORDER} from "./action-types";

export const addFavorite = (character) => {
    return {type: ADD_FAVORITE, payload: character}
}


export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id}
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