import React from 'react';

export default ({input, options, meta:{ touched, error }, defaultText = 'Select an option'}) => {
    return (
        <div className='form-group'>
            <select className='form-control' id={input.name} {...input}>
                <option value='default' disabled>{defaultText}</option>
                {options}
            </select>
            <p>{ touched && error }</p>
        </div>
    );
}
