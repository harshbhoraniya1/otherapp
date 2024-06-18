import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IRegistraform } from '@/interface/IRegistraform';
import axios from 'axios';


export default function registraform() {
const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    title: Yup.string().required('Title is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords don't match")
      .required('Confirmation of password is important'),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
  });

  const initialValues:IRegistraform = {
    firstName: '',
    title: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  

    
  return (
    <div>
        <h1>Registration Form</h1>
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form submitted:', values);
        axios.post('https://real-pear-fly-kilt.cyclic.app/accounts/register', values).then((y)=>{
            console.log(y.data)
        })
      }}
    >
<Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" />
          <ErrorMessage name='firstName'/>
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" />
          <ErrorMessage name='title'/>

        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" />
          <ErrorMessage name='lastName'/>

        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name='email'/>

        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name='password'/>

        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" />
          <ErrorMessage name='confirmPassword'/>

        </div>
        <div>
          <label>
            <Field type="checkbox" name="acceptTerms" />

            Accept Terms
          </label>
        </div>
          <ErrorMessage name='acceptTerms'/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>

    </div>
  )
}
