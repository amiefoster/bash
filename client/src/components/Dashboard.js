import { useState, useEffect } from "react";
import EventContainer from "./EventContainer";

function Dashboard({ user, setUser }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events").then((response) =>
      response.json().then((eventsArray) => checkIfEventsExist(eventsArray))
    );
  }, []);

  const checkIfEventsExist = (eventsArray) => {
    if (!!eventsArray) {
        const filteredEvents = eventsArray.filter((event) => event.user.id == user.id)
        setEvents(filteredEvents)
    }
  };

  return (
    <div className="row column-container">
      <div className="col-md-12 ">
        <EventContainer user={user} userEvents={events} />
      </div>
    </div>
  );
}

export default Dashboard;

//Dashboard will show all users Events
//onClick of event it will show all the information for that particular event
//Maybe it will dynamically route to the event information and you can click back to the dash to see all events
//each information card will have a button to add new information
//The form will be a modal
//This will make a POST request and add new information to the dashboard
//There will also be an "add event" button which will add a new event card to the dash
