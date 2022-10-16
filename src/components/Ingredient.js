import React from 'react';

const Ingredient = (props) => {
    const label = props.label
    return (
        <div>
            <label>
                <input type="checkbox" />
                {label}
            </label>
        </div>
    );
};

export default Ingredient;