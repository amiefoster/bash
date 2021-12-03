import { useState } from "react";

function EventForm({ user, toggleForm, addEvent, events, setEvents }) {
  //const [newEvent, setNewEvent] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    location: "",
    user_id: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        date: formData.name,
        location: formData.location,
        user_id: user.id,
      }),
    })
      .then((response) => response.json())
      .then((newEvent) => {
        console.log(newEvent);
        toggleForm();
      });
  };

  return (
    <div className="modal-form">
      <div onClick={toggleForm} className="overlay"></div>
      <div
        className="modal-form-content"
        style={{ backgroundColor: "#f5dfee" }}
      >
        <h3 style={{ backgroundColor: "#f5dfee" }}>Create New Event</h3>

        <form
          className="new-event-form"
          onSubmit={handleSubmit}
          style={{ backgroundColor: "#f5dfee" }}
        >
          <div className="new-event-text-field">
            <label htmlFor="name"></label>
            <input
              className="event-form-text"
              placeholder="Event Name"
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="new-event-text-field">
            <label htmlFor="description"></label>
            <input
              className="event-form-text"
              placeholder="Event Description"
              type="text"
              name="description"
              autoComplete="off"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="new-event-text-field">
            <label htmlFor="date"></label>
            <input
              className="event-form-text"
              placeholder="Date (Month 00)"
              type="text"
              name="date"
              autoComplete="off"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="new-event-text-field">
            <label htmlFor="location"></label>
            <input
              className="event-form-text"
              placeholder="Location"
              type="text"
              name="location"
              autoComplete="off"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div style={{ backgroundColor: "#f5dfee" }}>
            <button className="new-detail-button" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
