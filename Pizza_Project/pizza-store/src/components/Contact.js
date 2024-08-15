// src/components/Contact.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required')
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Here, you can handle form submission, e.g., send data to an API
  };

  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group my-3">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group my-3">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="form-group my-3">
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" className="form-control" />
            <ErrorMessage name="message" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
