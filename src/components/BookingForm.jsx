import React, { useState } from "react";
import { bookClass } from "../api/api";

function BookingForm({ classes, setClasses }) {
  const [selectedClass, setSelectedClass] = useState("");

  const handleBooking = async () => {
    const result = await bookClass(selectedClass);
    if (result.success) {
      setClasses(result.classes);
    }
  };

  return (
    <div className="booking-form">
      <h2>Book a Class</h2>
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">Select a class</option>
        {classes.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.name} - {cls.capacity - cls.booked} spots left
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Book</button>
    </div>
  );
}

export default BookingForm;
