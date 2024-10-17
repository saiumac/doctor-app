import React from 'react';
import DoctorList from './DoctorList';
import AppointmentForm from './AppointmentForm';

function App() {
  return (
    <div className="App">
      <h1>Hospital Web App</h1>
      <DoctorList />
      <AppointmentForm />
    </div>
  );
}

export default App;
