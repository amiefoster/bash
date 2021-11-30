import { Outlet, Link } from 'react-router-dom';
import Event from './Event';
import Add from '../images/add.png'


function EventContainer( { userEvents , user } ) {

    const handleAddEvent = () => {
        console.log("I've been clicked!")
    }

    return (
        <div className="container">
            <div class="row add-event-container">
                <div class="col-sm-2 ">
                    <img src={Add} className="add-event-button" onclick={() => handleAddEvent}/>
                </div>
            </div>

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
    