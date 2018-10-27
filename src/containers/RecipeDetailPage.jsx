import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const F2F_KEY = "685e39a37f15604b6f4ad04b5c7411e1";

export default class RecipeDetailPage extends Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    axios({
      method: "get",
      url: `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${F2F_KEY}&q=${title}`
    })
      .then(result => {
        console.log(result.data.recipes);
        this.setState({
          activeRecipe: result.data.recipes[0]
        });
        console.log(this.state.activeRecipe);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          activeRecipe: [],
          err: "Recipe not found!"
        });
      });
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 ? 
          <div className="active-recipe" style={{ marginTop:"2rem" }}>
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Back</Link>
            </button>
          </div>
        : <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />}
      </div>
    );
  }
}
