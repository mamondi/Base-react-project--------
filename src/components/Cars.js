import React, { useState, useEffect } from 'react';
import CarEdit from './CarEdit';
import CarAdd from './CarAdd';
import './Cars.css';

function Cars() {
  const [cars, setCars] = useState([]);
  const [editCar, setEditCar] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetch('/Cars.json')
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  const handleDelete = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    fetch('/Cars.json', {
      method: 'POST', 
      body: JSON.stringify(updatedCars),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const handleEdit = (car) => {
    setEditCar(car);
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  return (
    <div>
      {isAdding ? (
        <CarAdd setCars={setCars} setIsAdding={setIsAdding} />
      ) : editCar ? (
        <CarEdit car={editCar} setCars={setCars} setEditCar={setEditCar} />
      ) : (
        <div>
          <h1>Car List</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.Name}</td>
                  <td>{car.Year}</td>
                  <td>
                    <button onClick={() => handleEdit(car)}>Edit</button>
                    <button onClick={() => handleDelete(car.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAdd}>Add New Car</button>
        </div>
      )}
    </div>
  );
}

export default Cars;
