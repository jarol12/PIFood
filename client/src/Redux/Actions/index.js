import axios from "axios"

// ACTIONS-TYPES
export const GET_DIETS = "GET_DIETS"
export const GET_RECIPES ="GET_RECIPES"
export const POST_RESPONSE = "POST_RESPONSE"
export const PREVIOUS= "PREVIOUS"
export const NEXT = "NEXT"
export const SALUDO= "SALUDO"
export const  UPDATE_ID  =" UPDATE_ID"
export const PAGE = "PAGE"
export const FILTERS = "FILTERS"
export const GET_RECIPES_ID = "GET_RECIPES_ID"
export const FILTER_DB ="FILTER_DB"
export const FILTER_API ="FILTER_API"
export const ALL_RECIPES ="ALL_RECIPES"
export const HEALTH_SCORE  = "HEALTH_SCORE"
export const SORT = "SORT"
export const SEARCH_RECIPE = "SEARCH_RECIPE"
export const GET_RECIPES_DB = "GET_RECIPES_DB"
export const PUT= "PUT"
export const CLEAN= "CLEAN"
// ACTIONS

export function allRecipes(){
  return function(dispatch){
    return dispatch({ 
      type:ALL_RECIPES
    })
  }
}
export function postRecipe(info){
    return async function(dispatch){
        try {
            const response = await axios.post("http://localhost:3001/recipes/", info);

            alert("La informacion se posteo exitosamente.")
            return dispatch({
                type: POST_RESPONSE,
                payload: response.status
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}
export function prev(payload) {
    return {
      type: PREVIOUS,
      payload: payload,
    };
  }

  
  export function next(payload) {
    return {
      type: NEXT,
      payload: payload,
    };
  }
export function getDiets(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/diets")
            return dispatch({
                type: GET_DIETS,
                payload: response.data
            })
        } catch (error) {
           alert("SUCEDIÓ UN ERROR AL REQUERIR LAS DIETAS.")
        }
    }
}

export function getRecipes(){
    return async function(dispatch){
    
        try {
            const response = await axios.get("http://localhost:3001/recipes")
            return dispatch({
                type: GET_RECIPES,
                payload: response.data
            })
        } catch (error) {
            alert("SUCEDIÓ UN ERROR AL REQUERIR LAS RECETAS.")
        }
    }
}


export function getRecipesId(id){
    return async function(dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: GET_RECIPES_ID,
                payload: response.data
            })
        } catch (error) {
            alert("SUCEDIÓ UN ERROR AL REQUERIR LAS RECETA.")
        }
    }
}

export function filter(filter_by){
    return function(dispatch){
        return dispatch({
            type:FILTERS,
            payload:filter_by,

        })
    }
}


export function dataPage(payload) {
    return {
      type: PAGE,
      payload: payload,
    };
  }


  export function api(payload) {
    return {
      type: FILTER_API,
      payload: payload,
    };
  }
  
  export function dataBase() {
    return {
      type: FILTER_DB,
    };
  }
  export function getdatadb() {

    return async function(dispatch){
      try {
          const response = await axios.get("http://localhost:3001/recipes")
          return dispatch({
              type: GET_RECIPES_DB,
              payload: response.data
          })
      } catch (error) {
          alert("SUCEDIÓ UN ERROR AL REQUERIR LAS RECETAS.")
      }
  }
    
  }
  export function sort(payload) {
    return {
      type: SORT,
      payload: payload,
    };
  }
  export function searchRecipe(value) {
    return async function(dispatch){
      try {
          const response = await axios.get(`http://localhost:3001/recipes/?name=${value}`)
          return dispatch({
              type:SEARCH_RECIPE,
              payload: response.data
          })
      } catch (error) {
        
      }
  }
  }
  export function healthScore(payload) {
    return {
      type: HEALTH_SCORE,
      payload: payload,
    };
  }
  
  export function cleanRecipes() {
    return {
      type: CLEAN,
    };
  }
 

  export function updatePost(id,info){
    return async function(dispatch){
        try {
            const response = await axios.put(`http://localhost:3001/recipes/updatePost/${id}`,info);
            alert("La informacion se actualizó exitosamente.")
            return dispatch({
                type: PUT,
                payload: response.status
            })
        } catch (error) {
           
        }
    }
}

  export function updateId(payload) {
    return {
      type: UPDATE_ID,
      payload: payload,
    };
  }

