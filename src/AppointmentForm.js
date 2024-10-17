import React, { useState } from 'react';

const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const appointment = { name, doctor, date };

        // Send appointment data to AWS Lambda
        fetch('https://your-api-endpoint.amazonaws.com/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appointment)
        }).then(() => alert('Appointment booked successfully'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <label>Doctor:</label>
            <input type="text" value={doctor} onChange={e => setDoctor(e.target.value)} />
            <br />
            <label>Date:</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            <br />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default AppointmentForm;
