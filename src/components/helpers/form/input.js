import React from 'react';

export default ({ input, label, type, meta:{ touched, error }, placeholder, textarea}) => {
  return(
    <div className='input-container'>
      <input {...input} type={type} id={input.name} placeholder={label} />
      <p className='required'>{ touched && error }</p>
    </div>
  );
}
