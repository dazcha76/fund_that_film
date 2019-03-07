import React from 'react';
// import { on } from 'cluster';


export default ({ label, meta:{touched, error}, input, type='text', placeholder, textarea}) => {
    // const onChanged = (...args)=>{
    //     debugger;
    //     return input.onChange(...args);
    // }
    //            <textarea {...textarea} type={ type } id= {textarea.message}/>
    return(
        <div>
            <input {...input} type={type} id={input.name} placeholder={input.Title} />

            <label htmlFor={ input.name }>{ label }</label>
            <p> { touched && error } </p>
      </div>
   );
 }
