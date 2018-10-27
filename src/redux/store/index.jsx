import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import weatherReducer from '../reducer/weatherReducer'
import recipeReducer from '../reducer/recipeReducer' 
import searchRecipeReducer from '../reducer/searchReducer'

const rootReducers = combineReducers({
    weatherReducer,
    recipeReducer,
    searchRecipeReducer
})
  
const store = createStore(
    rootReducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export default store