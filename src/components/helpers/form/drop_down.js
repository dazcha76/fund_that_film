import React from 'react';

export default ({input, options, label, defaultText = 'Select an option'}) => {
    return (
        <div className='form-group'>
            <label htmlFor={input.name}>{label}</label>
            <select className='form-control' id={input.name} {...input}>
                <option value='default' disabled>{defaultText}</option>
                {options}
            </select>
        </div>
    );
}
