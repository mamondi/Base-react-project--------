import React, { useState } from 'react';

function CarAdd({ setCars, setIsAdding }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');

  const handleAdd = () => {
    const newCar = {
      id: Date.now(),
      Name: name,
      Year: year,
    };
    setCars((prevCars) => [...prevCars, newCar]);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <input
        type="text"
        placeholder="Car Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default CarAdd;
