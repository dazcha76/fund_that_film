import React from 'react';

export default ({ label, meta:{touched, error}, input, type='text', placeholder, textarea, value, ...props}) => {
  return(
    <div>
      <input {...input} type={type} id={input.name} placeholder={placeholder} value={value} {...props}/>
      <label htmlFor={ input.name }>{ label }</label>
      <p>{ touched && error }</p>
    </div>
  );
}
