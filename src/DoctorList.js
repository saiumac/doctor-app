import React, { useEffect, useState } from 'react';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        // Fetch list of doctors from AWS Lambda
        fetch('https://your-api-endpoint.amazonaws.com/doctors')
            .then(response => response.json())
            .then(data => setDoctors(data));
    }, []);

    return (
        <div>
            <h2>Doctors Available</h2>
            <ul>
                {doctors.map((doctor, index) => (
                    <li key={index}>{doctor.name} - {doctor.specialty}</li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
