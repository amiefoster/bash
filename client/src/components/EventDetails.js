import { userParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EventDetails() {
    const { eventId } = useParams()
    const [details, setDetails] = useState([])

   useEffect(() => {
       getDetails()
   }, [eventId])

   const getDetails = () => {
       fetch(`/event/${eventId}`)
       .then(r => r.json())
       .then(json => setDetails(json))
   }

    return (
        <div>
            <h1>This is the EventDetails!</h1>
        </div>
    )
}

export default EventDetails;

//this page will render all the details for a specific event
        //accomodations
        //activities
        //transportation
        //expenses
        //guests
        //packing list
    //all of these secitons will have an '+' button to add a new instance
        //the button will render a modal form 