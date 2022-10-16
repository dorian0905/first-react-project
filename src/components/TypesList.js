import React from 'react';
import Type from './Type';

const TypesList = (props) => {
    const possiblesTypes = ['entrée', 'plat', 'dessert'];
    const types = possiblesTypes.map(type => <Type key={type.substring(0,2)} label={type} onChange={() => props.onChange('type', type)} />)

    return (
        <div>
            <h3>Types de plats :</h3>
            <ul>
                {types}
            </ul>
        </div>
    );
};

export default TypesList;