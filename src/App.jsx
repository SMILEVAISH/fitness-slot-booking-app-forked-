import React, { useState, useEffect } from "react";
import BookingForm from "./components/BookingForm";
import ClassList from "./components/ClassList";
import Header from "./components/Header";
import ListBookings from "./components/ListBookings";
import { getClasses } from "./api/api.js";

function App() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const data = await getClasses();
      setClasses(data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <BookingForm classes={classes} setClasses={setClasses} />
        <ClassList classes={classes} setClasses={setClasses} />
        <ListBookings />
      </div>
    </div>
  );
}

export default App;
