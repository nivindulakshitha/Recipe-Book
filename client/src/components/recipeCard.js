import React, { useEffect, useState } from "react";
import "../index.css";

const RecipeCard = ({ title, ingredients }) => {
    const [Template, setTemplate] = useState("false")

    useEffect(() => {
        console.log(title.length)
        if (title.length === 0) {
            setTemplate("true")
        }
    }, [title])


    return (
        <div className="recipe-card" template={Template.toString()}>
            <div className="cover-section">
                <img src="https://placehold.co/300x200?text=not+available&font=source+sans+pro" alt="Recipe" />
                <div className="delete-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="white"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="cooking-time">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>30 mins</span>
                </div>
            </div>
        </div >
    );
}

export default RecipeCard;