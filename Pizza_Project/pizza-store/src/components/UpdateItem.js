// src/components/UpdateItem.js
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
    price: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/pizzas/${id}`)
      .then(response => {
        setInitialValues(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be a positive number')
  });

  const onSubmit = (values) => {
    axios.put(`http://localhost:5000/pizzas/${id}`, values)
      .then(response => console.log('Item updated successfully:', response.data))
      .catch(error => console.log('Error updating item:', error));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Update Pizza</h1>
      <Formik initialValues={initialValues} enableReinitialize validationSchema={validationSchema} onSubmit={onSubmit}>
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

          <button type="submit" className="btn btn-primary">Update Pizza</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateItem;
