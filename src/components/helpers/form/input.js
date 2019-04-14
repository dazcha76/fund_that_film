import React from 'react';

// export default ({ input, label, type, meta:{touched, error}, placeholder, textarea, value, ...props}) => {
export default ({ input, label, type, meta:{ touched, error }, placeholder, textarea}) => {
  return(
    <div>
      <input {...input} type={type} id={input.name} placeholder={label} />
      {/*<label htmlFor={ input.name }>{ label }</label>*/}
      <p>{ touched && error }</p>
    </div>
  );
}
