import React from "react";
import FoodCard from "../components/FoodCard";
import SearchFood from "../components/SearchFood";
import axios from "axios";
import { connect } from "react-redux";
import { getRecipes } from "../redux/action/recipeAction";

const mapStateToProps = (state) => {
  if (state.searchRecipeReducer.data.length == 0) {
    return {
      data: state.recipeReducer.data,
      isLoading: state.recipeReducer.isLoading,
      errorMessage: state.recipeReducer.errorMessage,
    };
  } else if (state.searchRecipeReducer.data.length > 0) {
    return {
      data: state.searchRecipeReducer.data,
      isLoading: state.searchRecipeReducer.isLoading,
      errorMessage: state.searchRecipeReducer.errorMessage,
    };
  } else {
    return {
      errorFind: 'Recipe Not Found'
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecipes: () => {
      dispatch(getRecipes());
    }
  };
};

class RecipePage extends React.Component {
  state = {
    recipes: [],
    err: ""
  };

  componentDidMount = () => {
    this.props.getRecipes()
  };

  render() {
    return (
      <div className="App">
        <SearchFood/>
        {this.props.data.length !== 0 ? (
          <FoodCard recipes={this.props.data} />
        ) : (
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipePage);
