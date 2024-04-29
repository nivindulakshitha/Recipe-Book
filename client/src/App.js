import React from "react";
import RecipeCard from "./components/recipeCard";
import "./index.css"

function App() { 
    return (
        <div id="app-container">
            <RecipeCard title="Spaghetti" ingredients="Pasta, Tomato Sauce, Meatballs" />
            <RecipeCard title="Spaghetti" ingredients="Pasta, Tomato Sauce, Meatballs" />
            <RecipeCard title="Spaghetti" ingredients="Pasta, Tomato Sauce, Meatballs" />
            <RecipeCard title="Spaghetti" ingredients="Pasta, Tomato Sauce, Meatballs" />
            <RecipeCard title="" />
        </div>
    );
}

export default App;