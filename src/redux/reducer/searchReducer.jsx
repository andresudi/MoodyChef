const recipeState = {
    data: [],
    isLoading: false,
    errorMessage: ''
}

const recipeReducer = (state=recipeState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_RECIPE_REQUEST': 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_SEARCH_RECIPE_SUCCESS':
        console.log("get recipe reducer",action.payload);
            return {
                ...state,
                data: action.payload
            }
        case 'GET_SEARCH_RECIPE_ERROR':
        console.log("error recipe reducer",action.payload);
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default recipeReducer;