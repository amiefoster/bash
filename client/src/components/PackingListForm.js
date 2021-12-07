import { useState } from "react";

function PackingListForm({ togglePackingListForm, id }) {
  const [formData, setFormData] = useState({
    item: "",
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
    fetch("/packing_lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: formData.item,
        event_id: id,
      }),
    })
      .then((response) => response.json())
      .then((newAccommodation) => {
        console.log(newAccommodation);
        togglePackingListForm();
      });
  };

  return (
    <div className="modal-form">
      <div onClick={togglePackingListForm} className="overlay"></div>
      <div
        className="modal-form-content"
        style={{ backgroundColor: "#fdddf4" }}
      >
        <h3 style={{ backgroundColor: "#fdddf4" }}>Add Item</h3>

        <form className="new-event-form" onSubmit={handleSubmit}>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#fdddf4" }}
          >
            <label htmlFor="item"></label>
            <input
              className="event-form-text"
              placeholder="Item name"
              type="text"
              name="item"
              autoComplete="off"
              value={formData.item}
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

export default PackingListForm;
