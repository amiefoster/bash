import { useState } from "react";

function ExpenseForm({ toggleExpenseForm, id, user }) {
  const [formData, setFormData] = useState({
    name: "",
    details: "",
    amount: "",
    event_id: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        details: formData.details,
        amount: formData.amount,
        event_id: id,
        guest_id: user.id,
      }),
    })
      .then((response) => response.json())
      .then((newAccommodation) => {
        console.log(newAccommodation);
        toggleExpenseForm();
      });
  };

  return (
    <div className="modal-form">
      <div onClick={toggleExpenseForm} className="overlay"></div>
      <div
        className="modal-form-content"
        style={{ backgroundColor: "#cbfcfb" }}
      >
        <h3 style={{ backgroundColor: "#cbfcfb" }}>Add New Expense</h3>

        <form className="new-event-form" onSubmit={handleSubmit}>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#cbfcfb" }}
          >
            <label htmlFor="name"></label>
            <input
              className="event-form-text"
              placeholder="Name"
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#cbfcfb" }}
          >
            <label htmlFor="details"></label>
            <input
              className="event-form-text"
              placeholder="Details"
              type="text"
              name="details"
              autoComplete="off"
              value={formData.details}
              onChange={handleChange}
            />
          </div>
          <div
            className="new-event-text-field"
            style={{ backgroundColor: "#cbfcfb" }}
          >
            <label htmlFor="amount"></label>
            <input
              className="event-form-text"
              placeholder="Amount (00.00)"
              type="text"
              name="amount"
              autoComplete="off"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div style={{ backgroundColor: "#cbfcfb" }}>
            <button className="new-detail-button" type="submit">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
