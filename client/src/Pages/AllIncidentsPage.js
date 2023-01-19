import React, { useState, useEffect } from "react";
import axios from "axios";

const AllIncidentsPage = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:5001/api/incidents");
        console.log(result.data.data.incidents);
        setIncidents(result.data.data.incidents);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>All incidents</h2>

      {incidents.map((incident, key) => (
        <table
          style={{
            fontfamily: "arial, sans-serif",
            bordercollapse: "collapse",
            width: "50%",
          }}
        >
          <th style={{ border: "1px solid #000000" }}>Incident name</th>
          <th style={{ border: "1px solid #000000" }}>Incident description</th>
          <th style={{ border: "1px solid #000000" }}>Incident creator</th>
          <th style={{ border: "1px solid #000000" }}>Incident date</th>
          <tr>
            <td style={{ border: "1px solid #000000" }}>
              {incident.incident_title}
            </td>
            <td style={{ border: "1px solid #000000" }}>
              {incident.incident_description}
            </td>
            <td style={{ border: "1px solid #000000" }}>
              {incident.incident_creater}
            </td>
            <td style={{ border: "1px solid #000000" }}>
              {incident.incident_date}
            </td>
          </tr>
        </table>
      ))}
    </div>
  );
};

export default AllIncidentsPage;
