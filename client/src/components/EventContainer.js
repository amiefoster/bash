import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Event from './Event';



function EventContainer( { userEvents , user } ) {

    return (
        <div className="events-container">
            {!!userEvents && userEvents.map((event, i) =>
                <div id={i} key={i}> 
                    <Link className="event-link" key={i} to={`/events/${event.id}`}>
                        <Event userEvent={event} />
                    </Link>
                </div>
            )}
            <Outlet />
            
        </div>
    )
}

export default EventContainer;

//fetch to event and filter by user.id 
    //save that filtered information to state and send down to event details!

//this page will render all the users events
    //when clicked it will go to a new page using dynamic routing that will show all of the event details
//will have an "add event" button to add a new event
    