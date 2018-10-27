import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FoodCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.recipes !== "Data Not Found!" ? (
            this.props.recipes.map(recipe => {
              return (
                <div
                  className="card"
                  style="width: 18rem;"
                  key={recipe.title}
                  className="col-md-4 lg-4 xs-4"
                  style={{ marginBottom: "2rem" }}
                >
                  <img
                    className="card-img-top"
                    src={recipe.image_url}
                    alt={recipe.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{recipe.title}</p>
                    <p className="recipes__subtitle">
                      Publisher: <span> {recipe.publisher} </span>
                    </p>
                  </div>
                  <button className="recipe__buttons">
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: { recipe: recipe.title }
                      }}
                    >
                      View Recipe
                    </Link>
                  </button>
                </div>
              );
            })
          ) : (
            <div className="container">
              <img src="https://d2ww77u6rx5bu1.cloudfront.net/assets/404-error-c21c3e2dd67cc59304fcb0db7320ebb3.svg" />
            </div>
          )}
        </div>
      </div>
    );
  }
}
