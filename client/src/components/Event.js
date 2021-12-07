
function Event({ userEvent }) {
  return (
    <div className="container background-none" >
      <div className="event-card">
        <h1>{userEvent.name}</h1>
        <p>{userEvent.date} - {userEvent.end_date}</p>
      </div>
    </div>
  );
}

export default Event;
