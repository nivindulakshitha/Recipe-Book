import React from "react";
import "../index.css";

const RecipeCard = (props) => { 
    return (
        <div className="recipe-card">
            <h2>{props.title}</h2>
            <p>Ingredients: {props.ingredients}</p>
        </div>
    );
}

export default RecipeCard;