import { useState } from "react";

function TransportationForm({ toggleTransportationForm, id, user, guests }) {
  const [formData, setFormData] = useState({
    mode: "",
    date: "",
    details: "",
    event_id: "",
    id: "",
  });
  

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/transportations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: formData.mode,
        date: formData.date,
        details: formData.details,
        event_id: id,
        guest_id: formData.id,
      }),
    })
      .then((response) => response.json())
      .then((newAccommodation) => {
        console.log(newAccommodation);
        toggleTransportationForm();
      });
  };


  return (
    <div className="modal-form">
      <div onClick={toggleTransportationForm} className="overlay"></div>
      <div
        className="modal-form-content"
        style={{ backgroundColor: "#fdddf4" }}
      >
        <h3 style={{ backgroundColor: "#fdddf4" }}>Add Transportation</h3>

        <form className="new-event-form" onSubmit={handleSubmit}>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label>
              <select
                className="event-form-text "
                style={{ backgroundColor: "#fdddf4" }}
                name="id"
                value={formData.id}
                onChange={handleChange}
              >
                <option value="">Choose A Guest</option>
                
                {guests &&
                  guests.map((guest) => (
                    <option key={guest.id} value={guest.id}>
                      {guest.user.name}
                    </option>
                  ))}
              </select>
            </label>            
          </div>
          
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="mode"></label>
            <input
              className="event-form-text"
              placeholder="Mode"
              type="text"
              name="mode"
              autoComplete="off"
              value={formData.mode}
              onChange={handleChange}
            />
          </div>
          
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="details"></label>
            <input
              className="event-form-text"
              placeholder="Details (ex: Departure time, Flight no.)"
              type="text"
              name="details"
              autoComplete="off"
              value={formData.details}
              onChange={handleChange}
            />
          </div>

          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="date"></label>
            <input
              className="event-form-text"
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

export default TransportationForm;
