import { ErrorMessage, useField, useFormik } from 'formik'
import React from 'react'

export default function Textfield({Name,...props}) {
   const [field,setfield]= useField(props)
  return (
    <div>
    <label htmlFor={field.name} > {Name} </label>
    <input {...props} {...field}   autoComplete='off' />
    <ErrorMessage component="div" name={field.name} className='text-danger' />
      
    </div>
  )
}
