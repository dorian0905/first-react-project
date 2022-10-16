import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = (props) => {
    const receipsList = props.receipsList
    let possibleIngredients = [];
    receipsList.forEach(receip => {
        receip.ingredient.forEach(oneIngredient => {
            if(!possibleIngredients.includes(oneIngredient)) {
                possibleIngredients.push(oneIngredient)
            }
        })
    });
    const ingredients = possibleIngredients.map(i => <Ingredient key={i.substring(0,2)} label={i} />)
    return (
        <div>
            <h3>Liste d'ingrédients :</h3>
            <ul>
                {ingredients}
            </ul>
        </div>
    );
};

export default IngredientsList;