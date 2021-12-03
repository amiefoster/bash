import { useState, useEffect } from "react";

function GuestForm({ toggleGuestForm, id, user }) {
  const [guests, setGuests] = useState();
  const [formData, setFormData] = useState({
    id: "",
  });

  useEffect(() => {
    fetch("/users").then((response) =>
      response.json().then((guestsArray) => checkIfGuestsExist(guestsArray))
    );
  }, []);

  const checkIfGuestsExist = (guestsArray) => {
    if (!!guestsArray) {
      setGuests(guestsArray);
    }
  };

  const handleChange = (event) => {
    console.log("THIS IS THE USER ID", event.target.value);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("THIS IS THE FORM DATA", formData);
    event.preventDefault();
    fetch("/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_id: id,
        user_id: formData.id,
      }),
    })
      .then((response) => response.json())
      .then((newGuest) => {
        console.log(newGuest);
        toggleGuestForm();
      });
  };

  return (
    <div className="modal-form">
      <div onClick={toggleGuestForm} className="overlay"></div>
      <div
        className="modal-form-content"
        style={{ backgroundColor: "#fdddf4" }}
      >
        <form className="new-event-form" onSubmit={handleSubmit}>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <h3 style={{ backgroundColor: "#fdddf4" }}>Select a Guest</h3>

            <label>
              <select
                className="event-form-text"
                name="id"
                value={formData.id}
                onChange={handleChange}
              >
                <option value="">Choose A Guest</option>
                {guests &&
                  guests.map((guest) => (
                    <option key={guest.id} value={guest.id}>
                      {guest.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </form>

        <div style={{ backgroundColor: "#fdddf4" }}>
          <button
            className="new-detail-button"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default GuestForm;

//going to make a POST request to /guests and give it an id of the events id
