const defaultState = {
    data: [],
    errorMessage: '',
    isLoading: false
}

const weatherReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'GET_WEATHER_REQUEST': 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_WEATHER_SUCCESS':
            return {
                ...state,
                data: action.payload
            }
        case 'GET_WEATHER_ERROR':
        console.log(action.payload);
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }
} 

export default weatherReducer;

