import React, { useState } from 'react';

function CarEdit({ car, setCars, setEditCar }) {
  const [name, setName] = useState(car.Name);
  const [year, setYear] = useState(car.Year);

  const handleSave = () => {
    const updatedCar = { ...car, Name: name, Year: year };
    setCars((prevCars) =>
      prevCars.map((c) => (c.id === car.id ? updatedCar : c))
    );
    setEditCar(null);
  };

  const handleCancel = () => {
    setEditCar(null);
  };

  return (
    <div>
      <h2>Edit Car</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default CarEdit;
