
import React, { useState } from 'react';

export default function App() {
  const [reservations, setReservations] = useState([]);

  const handleReserve = (court, time) => {
    const newBooking = { court, time, date: new Date().toLocaleDateString() };
    setReservations([...reservations, newBooking]);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Padel Court Reservation</h1>
      <button onClick={() => handleReserve("Court 1", "17:00")}>Reserve Court 1 - 17:00</button>
      <button onClick={() => handleReserve("Court 2", "18:00")}>Reserve Court 2 - 18:00</button>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((r, i) => (
          <li key={i}>{r.court} at {r.time} on {r.date}</li>
        ))}
      </ul>
    </div>
  );
}
