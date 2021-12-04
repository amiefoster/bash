import { Outlet, Link } from "react-router-dom";
import Event from "./Event";

function EventContainer({ userEvents, user }) {
  return (
    <div className="events-container">
      {!!userEvents &&
        userEvents.map((event, i) => (
          <div id={i} key={i}>
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

