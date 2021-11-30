// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// //import { useParams } from 'react-router-dom';

// function EventDetails({}) {
//   const { eventId } = useParams();
//   const [details, setDetails] = useState([]);

//   useEffect(() => {
//     getDetails();
//   }, [eventId]);

  
//   const getDetails = () => {
//     fetch(`/events/${eventId}`)
//       .then((response) => response.json())
//       .then((eventInfo) => checkIfDetailsExist(eventInfo));
//   };

//   const checkIfDetailsExist = (eventInfo) => {
//        if (!!eventInfo) { 
//            setDetails(eventInfo)
//        }
//   };
  

//   const renderDetails = () => {
    
//     console.log(details)
//     return <p>Event Details</p>
//       // return (<div className="row column-container">

//       //     <div className="col-md-4 column-left">
//       //     <div><h1>{details.name}</h1></div>
//       //     <div><p>{details.description}</p></div>
//       //     <div><p>Hosted by, {details.user.name}</p></div>
//       //     <div><p>{details.date}</p></div>
//       //     <div><p>{details.location}</p></div>
//       //     </div>

//       //     <div className="col-md-4 column-middle">
//       //     <div><p>Guests: {!!details && details.guests.map(guest => <li>{guest.user.name}</li>)}</p></div>
//       //     <div><p>Accommodations: {details.accommodations.map(stay => <li>{stay.name}{stay.address}</li>)}</p></div>
//       //     <div><p>Transportation: {details.transportations.map(transportation => <li>{transportation.mode} - {transportation.date} -
//       //         {transportation.details}</li>)}</p></div>
//       //     <div><p>Expenses: {details.expenses.map(expense => <li>{expense.name} - {expense.details} - {expense.amount}</li>)}</p></div>
//       //     <div><p>Packing List: {details.packing_lists.map(item => <li>{item.item}</li>)}</p></div>
//       //     </div>

//       //     <div className="col-md-4 column-right">
//       //     <div><p>Activities: {details.activities.map(activity => <li>{activity.name} - {activity.description}</li>)}</p></div>
//       //     </div>

//       // </div>
//       // )
  
//   }

//   return (
//     <div>         
//       {renderDetails()}
//     </div>
//   );
// }

// export default EventDetails;

// {/* //this page will render all the details for a specific event
// //accomodations
// //activities
// //transportation
// //expenses
// //guests
// //packing list
// //all of these secitons will have an '+' button to add a new instance
// //the button will render a modal form */}


// {/* <div className="row column-container">

// <div className="col-md-4 column-left">
// <div><h1>{details.name}</h1></div>
// <div><p>{details.description}</p></div>
// <div><p>Hosted by, {details.user.name}</p></div>
// <div><p>{details.date}</p></div>
// <div><p>{details.location}</p></div>
// </div>

// <div className="col-md-4 column-middle">
// <div><p>Guests: {!!details && details.guests.map(guest => <li>{guest.user.name}</li>)}</p></div>
// <div><p>Accommodations: {details.accommodations.map(stay => <li>{stay.name}{stay.address}</li>)}</p></div>
// <div><p>Transportation: {details.transportations.map(transportation => <li>{transportation.mode} - {transportation.date} -
//     {transportation.details}</li>)}</p></div>
// <div><p>Expenses: {details.expenses.map(expense => <li>{expense.name} - {expense.details} - {expense.amount}</li>)}</p></div>
// <div><p>Packing List: {details.packing_lists.map(item => <li>{item.item}</li>)}</p></div>
// </div>

// <div className="col-md-4 column-right">
// <div><p>Activities: {details.activities.map(activity => <li>{activity.name} - {activity.description}</li>)}</p></div>
// </div>

// </div>

//  */}
