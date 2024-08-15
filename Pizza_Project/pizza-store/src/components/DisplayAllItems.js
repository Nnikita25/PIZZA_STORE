// src/components/DisplayAllItems.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayAllItems = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/pizzas')
      .then(response => {
        setPizzas(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/pizzas/${id}`)
      .then(() => {
        setPizzas(pizzas.filter(pizza => pizza.id !== id));
      })
      .catch(error => console.log('Error deleting item:', error));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="text-center">All Pizzas</h1>
      <div className="row">
        {pizzas.map(pizza => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.description}</p>
                <p className="card-text"><strong>Price:</strong> ${pizza.price}</p>
                <button className="btn btn-danger" onClick={() => handleDelete(pizza.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllItems;
