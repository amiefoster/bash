import { useState } from "react";

function ActivityForm({ toggleActivityForm, id }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    event_id: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        date: formData.date,
        time: formData.time,
        event_id: id,
      }),
    })
      .then((response) => response.json())
      .then((newEvent) => {
        console.log(newEvent);
        toggleActivityForm();
      });
  };

  return (
    <div className="modal-form">
      <div onClick={toggleActivityForm} className="overlay"></div>
      <div
        className="modal-form-content"
        style={{ backgroundColor: "#fdddf4" }}
      >
        <h3 style={{ backgroundColor: "#fdddf4" }}>Add Activity</h3>

        <form className="new-event-form" onSubmit={handleSubmit}>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="name"></label>
            <input
              className="event-form-text"
              placeholder="Activity Name"
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="description"></label>
            <input
              className="event-form-text"
              placeholder="Description"
              type="text"
              name="description"
              autoComplete="off"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="time"></label>
            <input
              className="event-form-text"
              placeholder="Time (00 am/pm)"
              type="time"
              name="time"
              autoComplete="off"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="date"></label>
            <input
              className="event-form-text event-form-date"
              placeholder="Date (MM/DD/YY)"
              type="date"
              name="date"
              autoComplete="off"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div style={{ backgroundColor: "#fdddf4" }}>
            <button className="new-detail-button" type="submit">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ActivityForm;
