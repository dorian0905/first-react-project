import React from 'react';
import TypesList from './TypesList';
import IngredientsList from './IngredientsList';

const Sorter = (props) => {
    return (
        <div className='sorter'>
            <TypesList onChange={props.onChange} />
            <IngredientsList receipsList={props.receipsList} />
        </div>
    );
};

export default Sorter;