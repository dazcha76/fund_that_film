import React from 'react';

export default ({input, options, meta:{ touched, error }, defaultText = 'Select an option'}) => {
    return (
        <div className='dropdown-container'>
            <select className='dropdown-input' id={input.name} {...input}>
                <option value='default' disabled>{defaultText}</option>
                {options}
            </select>
            <p className='required'>{ touched && error }</p>
        </div>
    );
}
