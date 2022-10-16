import React from 'react';

function Displayer(props) {
    const name = props.selectedReceip.name;
    const img = props.selectedReceip.img;
    const types = props.selectedReceip.type;
    const typesList = types.map((type) =>
        <li key={type.substring(0,2)}>{type}</li>
    );
    const ingredients = props.selectedReceip.ingredient;
    const ingredientsList = ingredients.map((ingredient) =>
        <li className='displayer__list__element' key={ingredient.substring(0,2)}>{ingredient}</li>
    );

    return (
        <aside className='displayer'>
            <div className='displayer__img-container'>
                <img className='displayer__img-container__img' src={require("../assets/img/" + img)} alt={"Photo du plat " + name} />
            </div>
            <h2 className='displayer__name'>{name}</h2>
            <h3 className='displayer__list-title'>Types :</h3>
            <ul className='displayer__list'>{typesList}</ul>
            <h3 className='displayer__list-title'>Ingrédients :</h3>
            <ul className='displayer__list'>{ingredientsList}</ul>
        </aside>
    );
};

export default Displayer;