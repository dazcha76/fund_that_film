import React from 'react';


export default ({ label, meta, meta:{touched, error}, input, type='text'}) => {
    return(
        <div>
            <input {...input} 
            id= {input.name}
            type= { type }
            key= { input.name }/>
            <label htmlFor={ input.name }>{ label }</label>
            <p> { touched && error } </p>
      </div>
   );
 }
