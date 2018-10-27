import axios from "axios";

const F2F_KEY = "685e39a37f15604b6f4ad04b5c7411e1";

export const searchRecipes = (recipeName) => {
  return dispatch => {
    dispatch({ type: "GET_SEARCH_RECIPE_REQUEST" });
    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${F2F_KEY}&q=${recipeName}&count=10`
    })
      .then(result => {
        console.log("==SEARCH====XXXXX", result.data.recipes);
        if (result.data.recipes.length > 0) {
            dispatch({
                type: "GET_SEARCH_RECIPE_SUCCESS",
                payload: result.data.recipes
              });
        } else {
            dispatch({
                type: "GET_SEARCH_RECIPE_SUCCESS",
                payload: 'Data Not Found!'
            });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "GET_SEARCH_RECIPE_ERROR", payload: err.response });
      });
  };
};
