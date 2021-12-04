import { useState, useEffect } from "react";
import EventContainer from "./EventContainer";
import Add from "../images/add.png";
import EventForm from "./EventForm";

function Dashboard({ user, setUser }) {
  const [events, setEvents] = useState([]);
  const [newEventForm, setNewEventForm] = useState(false);

  const toggleForm = () => {
    setNewEventForm(!newEventForm);
    console.log(newEventForm);
  };

  useEffect(() => {
    fetch("/events").then((response) =>
      response.json().then((eventsArray) => checkIfEventsExist(eventsArray))
    );
  }, [newEventForm]);

  const checkIfEventsExist = (eventsArray) => {
    if (!!eventsArray) {
      const filteredEvents = eventsArray.filter(
        (event) => event.user.id == user.id
      );
      setEvents(filteredEvents);
    }
  };

  const addEvent = (newEvent) => {
    let updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
  };

  return (
    <div className="row column-container">
      <div className="row add-event-container">
        <div className="col-sm-9 dashboard-title">{user.name}'s Planz!</div>
        <div className="col-sm-2 dash-button">
          <img src={Add} className="add-event-button" onClick={toggleForm} />
        </div>
      </div>
      <div className="col-md-12 ">
        {newEventForm && (
          <EventForm
            user={user}
            setEvents={setEvents}
            events={events}
            toggleForm={toggleForm}
            addEvent={addEvent}
          />
        )}
        <EventContainer user={user} userEvents={events} />
      </div>
    </div>
  );
}

export default Dashboard;

//need to add to filtered events so it shows events that the user is a guest of as well*********