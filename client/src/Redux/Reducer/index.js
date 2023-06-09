import { 
    FILTERS,
    GET_DIETS,
    GET_RECIPES,
    PREVIOUS,
    NEXT,
    PAGE,
    SORT,
    FILTER_DB,
    GET_RECIPES_ID,
    FILTER_API,
    HEALTH_SCORE,
    ALL_RECIPES,
    UPDATE_ID,
    CLEAN,
    SEARCH_RECIPE,
    GET_RECIPES_DB
} from "../Actions";

let initialState = {
    recipes:[],
    search:[],
    diets: [],
    FoodFiltered: [],
    page:1,
    dataId:[],
    updateId:"",
    recipesDb:[]
}

function rootReducer (state = initialState, action){
    switch (action.type) {
      case CLEAN:
        return {
            ...state,
            dataId:[],
            recipes: []
        }; 
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }; 
        case UPDATE_ID:
          return {
              ...state,
              updateId:action.payload
          }; 
          
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                FoodFiltered:action.payload
            };
        case GET_RECIPES_DB:
          let db = action.payload.filter((recipe) => {
            return typeof recipe.id == "string";
          });
            return {
              ...state,
              recipesDb: db,
            };
          
        case GET_RECIPES_ID:
            return {
                ...state,
                dataId: action.payload
            };
        
        case NEXT:
            return {
              ...state,
              page: state.page + action.payload,
            };
        case PREVIOUS:
            return {
              ...state,
              page: state.page - action.payload,
            };
        case PAGE:
            return {
              ...state,
              page: action.payload,
            };
        case FILTERS:
          function fts(diets){
            const filtros = diets.some(diet => diet === action.payload)
            return filtros
            
          }
        let recipesFilter = state.recipes.filter(recipe=>fts(recipe.diets))
        return {
          ...state,
          recipes: recipesFilter,
          page:1
        };

        case ALL_RECIPES:
        return {  
            ...state,
            recipes:state.FoodFiltered
        }
        
        case FILTER_API:
        let apiFilter = state.FoodFiltered.filter((recipe) => {
          return typeof recipe.id === "number";
        });
        return {
          ...state,
          recipes: apiFilter,
        };
      case FILTER_DB:
        let dbFilter = state.recipes.filter((recipe) => {
          return typeof recipe.id == "string";
        });
        if (dbFilter.length !== 0) {
          return {
            ...state,
            recipes: dbFilter,
          };
        } else {
          return {
            ...state,
            recipes: dbFilter,
            page:1,
          };
        }


        case HEALTH_SCORE:
            let data = [...state.recipes]
              data.sort((prev, next) => {
                if (prev.healthScore < next.healthScore) {
                  return action.payload === true ? 1 : -1;
                }
                if (prev.healthScore > next.healthScore) {
                  return action.payload === false ? 1 : -1;
                }
                return 0;
              });
            return {
              ...state,
              page:1,
              recipes: data
            };
        case SORT:
          let orderRecipe = [...state.recipes];
    
          orderRecipe = orderRecipe.sort((prev, next) => {
            if (prev.nombre < next.nombre) {
              return action.payload === "upward" ? 1 : -1;
            }
            if (prev.nombre > next.nombre) {
              return action.payload === "falling" ? 1 : -1;
            }
            return 0;
          });
          return {
            ...state,
            page:1,            
            recipes: orderRecipe,
          };
        case SEARCH_RECIPE:
        return {
          ...state,
          //search: action.payload.slice(0,5)
          recipes: action.payload
        };
        
            // else if(action.payload==="filter"){
            //     return{
            //         ...state,
            //         filters: true,
            //         usersFiltered: [...state.allUsers].filter((user)=> user.pokemon==="pikachu")
            // }

        default: return state
         
    }
}

export default rootReducer;