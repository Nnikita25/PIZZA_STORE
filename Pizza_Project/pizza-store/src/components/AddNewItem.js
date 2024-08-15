// src/components/AddNewItem.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const initialValues = {
    name: '',
    description: '',
    price: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be a positive number')
  });

  const onSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:5000/pizzas', values)
      .then(response => {
        console.log('Item added successfully:', response.data);
        resetForm();
      })
      .catch(error => console.log('Error adding item:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Add New Pizza</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary">Add Pizza</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewItem;
