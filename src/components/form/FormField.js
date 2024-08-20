import React from 'react';


export default function FormField(props) {

    const {name,type,value,onChange} = props
    
    return (
        <div className='form-field'>
          <label className='form-field-label' htmlFor={name}>{name}</label>
          <input
            className='form-field-input'
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      );
}