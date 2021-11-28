import EventDetails from './EventDetails'
import { Outlet, Link } from 'react-router-dom'

function EventContainer() {

    return (
        <div>
            <h1>This is the EventContainer!</h1>
            <EventDetails />
        </div>
    )
}

export default EventContainer;

//fetch to event and filter by user.id 
    //save that filtered information to state and send down to event details!

//this page will render all the users events
    //when clicked it will go to a new page using dynamic routing that will show all of the event details
//will have an "add event" button to add a new event
    