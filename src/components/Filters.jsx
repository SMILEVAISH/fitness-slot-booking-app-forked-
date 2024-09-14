import React from "react";

function Filters({ setFilters }) {
  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="filters">
      <label>
        Type:
        <input type="text" name="type" onChange={handleFilterChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" onChange={handleFilterChange} />
      </label>
    </div>
  );
}

export default Filters;
