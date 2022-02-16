import { useState } from "react";

function EventForm({ user, toggleForm, addEvent, events, setEvents }) {
  //const [newEvent, setNewEvent] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    end_date: "",
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
    const imageData = new FormData();
    imageData.append("name", formData.name);
    imageData.append("description", formData.description);
    imageData.append("date", formData.date);
    imageData.append("end_date", formData.end_date);
    imageData.append("location", formData.location);
    imageData.append("user_id", user.id);
    imageData.append("image", event.target.image.files[0], event.target.image.value);

    fetch("/events", {
      method: "POST",
      body: imageData
    })
      .then((response) => response.json())
      .then((newEvent) => {
        console.log(newEvent)
        addUserAsGuest(user.id, newEvent.id)
        toggleForm()
      })
  };

  const addUserAsGuest = (user, event) => {
    fetch("/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_id: event,
        user_id: user,
      }),
    })

  }

  return (
    <div className="modal-form">
      <div onClick={toggleForm} className="overlay"></div>
      <div
        className="modal-form-content event-form"
        style={{ backgroundColor: "#fdddf4" }}
      >
        <h3 style={{ backgroundColor: "#fdddf4" }}>Create New Event</h3>

        <form
          className="new-event-form"
          onSubmit={handleSubmit}
          style={{ backgroundColor: "#fdddf4" }}
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
              placeholder="Description"
              type="text"
              name="description"
              autoComplete="off"
              value={formData.description}
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
          <div className="new-event-text-field">
            <label htmlFor="image"></label>
            <input
              className="event-form-text"
              type="file"
              name="image"
            />
          </div>
          
          <div className="new-event-text-field event-date-field">
            <label className="new-event-text-field" htmlFor="date">Start Date:</label>
            <input
              className="event-form-text"
              placeholder="Start Date"
              type="date"
              name="date"
              autoComplete="off"
              value={formData.date}
              onChange={handleChange}
            />
          <div className="new-event-text-field event-date-field">
            <label className="new-event-text-field" htmlFor="date">End Date:</label>
            <input
              className="event-form-text"
              placeholder="end Date"
              type="date"
              name="end_date"
              autoComplete="off"
              value={formData.end_date}
              onChange={handleChange}
              />
              </div>
          </div>
          
          <div style={{ backgroundColor: "#fdddf4" }}>
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
