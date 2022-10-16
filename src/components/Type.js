import React from 'react';

const Type = (props) => {
    const label = props.label
    return (
        <li>
            <label>
                <input type="checkbox" onChange={props.onChange} />
                {label}
            </label>
        </li>
    );
};

export default Type;