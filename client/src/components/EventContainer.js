import { Outlet, Link } from "react-router-dom";
import Background from '../images/background.png'


import Event from "./Event";

function EventContainer({ userEvents, user }) {
  return (
    <div className="events-container" style={{backgroundImage: `url(${Background})` }}>
      {!!userEvents &&
        userEvents.map((event, i) => (
          <div id={i} key={i} className="background-none">
            <Link className="event-link" key={i} to={`/events/${event.id}`}>
              <Event userEvent={event} />
            </Link>
          </div>
        ))}
      <Outlet />
    </div>
  );
}

export default EventContainer;

