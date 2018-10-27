import axios from "axios";

const F2F_KEY = "685e39a37f15604b6f4ad04b5c7411e1";

export const getRecipes = () => {
  return dispatch => {
    dispatch({ type: "GET_RECIPE_REQUEST" });
    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${F2F_KEY}&q=chicken&count=20`
    })
      .then(result => {
        console.log('======XXXXX',result.data.recipes);
        dispatch({ type: "GET_RECIPE_SUCCESS", payload: result.data.recipes });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "GET_RECIPE_ERROR", payload: err.response });
      });
  };
};

