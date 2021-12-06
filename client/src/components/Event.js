function Event({ userEvent }) {
  return (
    <div className="container">
      <div className="event-card">
        <h1>{userEvent.name}</h1>
        <p>{userEvent.date}</p>
      </div>
    </div>
  );
}

export default Event;
