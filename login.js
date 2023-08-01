import { Form, Formik, validateYupSchema } from 'formik'
import React from 'react'
import Textfield from './textfield'

//npm i formik, yup



export default function Login() {
  const validate = Yup.object({
    firstname : Yup.string()
      .max(5,'Must be 5 character')
      .required('Required'),
    lastname : Yup.string()
      .max(5,'Must be 5 character')
      .required('Required'),
    email : Yup.string()
      .email('Email is invalid')
      .required('Required'),
    password : Yup.string()
      .min(5,'Must be 5 character')
      .required('Required'),
    confirmpassword : Yup.string()
      .oneOf([Yup.ref('password'),null],'Pass must be match')
      .required('Required')
  })
  validateYupSchema={validate}

    
  return (
    <>
    <Formik initialValues={{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmpassword:""
    }
    } >
    {
      formik=>{

        <Form>
          <Textfield Name="First Name" name="First Name" type="text"  />
          <Textfield Name="Last Name" name="Last Name" type="text"  />
          <Textfield Name="Email" name="Email" type="email"  />
          <Textfield Name="Password" name="Password" type="password"  />
          <Textfield Name="Confirm Password" name="Confirm Password" type="password"  />
        </Form>

      }
    }

    </Formik>
        
    </>
  )
}
