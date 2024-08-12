import React from 'react';


export default function FormField(props) {

    const {name,type,value,onChange} = props
    
    return (
        <div>
          <label htmlFor={name}>{name}</label>
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      );
}