import React from "react";
import Pagination from "./Pagination";

function ClassList({ classes }) {
  return (
    <div className="class-list">
      <h2>Available Classes</h2>
      {classes.map((cls) => (
        <div key={cls.id} className="class-item">
          <h3>{cls.name}</h3>
          <p>Capacity: {cls.capacity}</p>
          <p>Booked: {cls.booked}</p>
        </div>
      ))}
      <Pagination />
    </div>
  );
}

export default ClassList;
