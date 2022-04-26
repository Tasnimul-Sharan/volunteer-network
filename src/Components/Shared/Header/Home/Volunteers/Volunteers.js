import React, { useEffect, useState } from "react";
import Volunteer from "../Volunteer/Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/activities")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);
  return (
    <div className="row">
      {volunteers.map((volunteer) => (
        <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
      ))}
    </div>
  );
};

export default Volunteers;
