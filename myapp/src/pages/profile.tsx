import React from 'react'
import { IProfile } from '@/interface/IProfile'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

// const velidationSch = Yup.object().shape({
//     firstName: Yup.string().required('required'),
//     lastName: Yup.string().required('required'),
//     city: Yup.string().required('required'),
// })

const validateData = (data:IProfile) : Partial<IProfile>=>{

    let error : Partial<IProfile> = {
      
     
    };

    if(!data.firstName)
      {
        error.firstName = "Please Enter firstName"
        error.lastName = "Please Enter Last Name"
        error.city = "Please Enter City"
      }

      
    return error;

  }

export default function profile() {
    const iprofile:IProfile = {
        firstName: '',
        lastName: '',
        city: '',
    }
  return (
    <div>
        <h1 className='bg-black text-red-600' >My Example</h1>
        <Formik
        initialValues={iprofile}
        validate={validateData}
        // validationSchema={velidationSch}
        onSubmit={(values:IProfile) => {
            console.log({values, })
        }}
        >
            <Form>
                <label htmlFor='firstName' >First Name:</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
                <ErrorMessage name='firstName'/>

                <label htmlFor='lastName'>Last Name:</label>
                <Field id="lastName" name="lastName" placeholder="deo" />
                <ErrorMessage name='lastName'/>


                <label htmlFor='city'>City:</label>
                <Field id="city" name="city" placeholder="pune" />
                <ErrorMessage name='city'/>

                <button type='submit'>Submit</button>
            </Form>

        </Formik>
    </div>
  )
}
