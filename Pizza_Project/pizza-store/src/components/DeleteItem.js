// src/components/DeleteItem.js
import React from 'react';
import axios from 'axios';

const DeleteItem = ({ id }) => {
  const deleteItem = () => {
    axios.delete(`http://localhost:5000/pizzas/${id}`)
      .then(response => console.log('Item deleted successfully:', response.data))
      .catch(error => console.log('Error deleting item:', error));
  };

  return (
    <button className="btn btn-danger" onClick={deleteItem}>
      Delete
    </button>
  );
};

export default DeleteItem;
