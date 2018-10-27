import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRecipes } from "../redux/action/searchRecipeAction";

const mapDispatchToProps = dispatch => {
  return {
    searchRecipes: recipeName => {
      dispatch(searchRecipes(recipeName));
    }
  };
};

class SearchFood extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      recipeName: ""
    }
  }

  render() {
    return (
      <div style={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <input type="text" onChange={e => this.setState({recipeName: e.target.value})} name="recipeName" placeholder="Recipe..." />
        <button onClick={() => this.props.searchRecipes(this.state.recipeName)}>Search</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchFood);
