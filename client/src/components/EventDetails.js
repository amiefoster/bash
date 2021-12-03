import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { useParams } from 'react-router-dom';
import Add from '../images/small-add.png';
import GuestForm from './GuestForm';
import AccommodationForm from "./AccommodationForm";
import TransportationForm from './TransportationForm';
import ExpenseForm from "./ExpenseForm";
import PackingListForm from './PackingListForm'
import ActivityForm from "./ActivityForm";
import TimelineContainer from "./TimelineContainer";
import Close from '../images/remove.png'

function EventDetails({user}) {
  const { eventId } = useParams();
  const [details, setDetails] = useState();
  const [guestForm, setGuestForm] = useState(false);
  const [accommodationForm, setAccommodationForm] = useState(false);
  const [transportationForm, setTransportationForm] = useState(false);
  const [expenseForm, setExpenseForm] = useState(false);
  const [packingListForm, setPackingListForm] = useState(false);
  const [activityForm, setActivityForm] = useState(false)
  
  useEffect(() => {
    getDetails();
  }, [eventId, guestForm, accommodationForm, transportationForm, expenseForm, packingListForm, activityForm, user]);

  const getDetails = () => {
    fetch(`/events/${eventId}`)
      .then((response) => response.json())
      .then((eventInfo) => checkIfDetailsExist(eventInfo));
  };
  
  const checkIfDetailsExist = (eventInfo) => {
       if (!!eventInfo) { 
           setDetails(eventInfo)
       }
  };

  const getExpenseTotal = () => {
    if (!!details) {
          let total = 0
          details.expenses.map(expense => {
            total = total + expense.amount
          })
          return total     
    }
  }

    const toggleGuestForm = () => {
    setGuestForm(!guestForm)
    }
    const toggleAccommodationForm = () => {
        setAccommodationForm(!accommodationForm)
    }
    const toggleTransportationForm = () => {
        setTransportationForm(!transportationForm)
    }
    const toggleExpenseForm = () => {
        setExpenseForm(!expenseForm)
    }
    const togglePackingListForm = () => {
        setPackingListForm(!packingListForm)
    }  
    const toggleActivityForm = () => {
        setActivityForm(!activityForm)
    }

  return (
    <div>         
        { details &&
        <div className="row column-container">
            <div className="col-md-4 event-details-left">
                <div className="basic-info-card">
                    <div className="details-name">
                        <h1>{details.name}</h1>
                    </div>
                    <div>
                        <p className="details-description">{details.description}</p>
                    </div>
                    <div>
                        <p>Hosted by, {details.user.name}</p>
                    </div>
                    <div>
                        <p>{details.date}</p>
                    </div>
                    <div>
                        <p>{details.location}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 details-column-middle">
                {packingListForm && <PackingListForm togglePackingListForm={togglePackingListForm} id={eventId} user={user} />}
                {expenseForm && <ExpenseForm toggleExpenseForm={toggleExpenseForm} id={eventId} user={user} />}
                {transportationForm && <TransportationForm toggleTransportationForm={toggleTransportationForm} id={eventId} user={user}/>}
                {accommodationForm && <AccommodationForm toggleAccommodationForm={toggleAccommodationForm} id={eventId} user={user}/>}
                {guestForm && <GuestForm className="modal-form-shadow" toggleGuestForm={toggleGuestForm} id={eventId} user={user}/>}
                {activityForm && <ActivityForm className="modal-form-shadow" toggleActivityForm={toggleActivityForm} id={eventId} user={user}/>}
                
                <div className="card details-card guest-header-bg" style={{width: "15rem"}}>
                    <div className="card-header" >
                        Guests <img src={Add} alt="add button" className="add-details-button" onClick={toggleGuestForm}/>
                    </div>
                        {details.guests.map(guest => <li key={guest.id} className="list-group-item" style={{backgroundColor: "#fdddf4"}}><img src={Close} className="details-delete-btn" onClick={console.log("delete btn")}/>{guest.user.name} </li> )}
                </div>
               
                <div className="card details-card accommodation-header-bg" style={{width: "15rem"}}>
                    <div className="card-header">
                        Accommodations <img src={Add} alt="add button" className="add-details-button" onClick={toggleAccommodationForm}/>
                    </div>
                    {details.accommodations.map(stay => <li key={stay.id} className="list-group-item" style={{backgroundColor: "#c5ebd7"}}><img src={Close} className="details-delete-btn" onClick={console.log("delete btn")}/>{stay.name} - Located at: {stay.address}</li>)}
                </div>

                <div className="card details-card transportation-header-bg" style={{width: "15rem"}}>
                    <div className="card-header">
                        Transportation <img src={Add} alt="add button" className="add-details-button" onClick={toggleTransportationForm}/>
                    </div>
                    {details.transportations.map(transportation => <li key={transportation.id} className="list-group-item" style={{backgroundColor: "#ffdec0"}}><img src={Close} className="details-delete-btn" onClick={console.log("delete btn")}/>{transportation.mode} - {transportation.date} - {transportation.details}</li>)}
                </div>

                <div className="card details-card expense-header-bg" style={{width: "15rem"}}>
                    <div className="card-header">
                        Expenses <img src={Add} alt="add button" className="add-details-button" onClick={toggleExpenseForm}/>
                    </div>
                    {details.expenses.map(expense => <li key={expense.id} className="list-group-item" style={{backgroundColor: "#cbfcfb"}}><img src={Close} className="details-delete-btn" onClick={console.log("delete btn")}/>{expense.name} - {expense.details} - ${expense.amount}</li>)}
                    <div className="list-group-item">Total: ${getExpenseTotal()}</div>
                </div>


                <div className="card details-card list-header-bg" style={{width: "15rem"}}>
                    <div className="card-header">
                        Packing List <img src={Add} alt="add button" className="add-details-button" onClick={togglePackingListForm}/>
                    </div>
                    {details.packing_lists.map(item => <li key={item.id} className="list-group-item" style={{backgroundColor: "#fcdfdf"}}><img src={Close} className="details-delete-btn" onClick={console.log("delete btn")}/>{item.item}</li>)}
                </div>

            </div>

            <div className="col-md-4 intnerary-column-right">
                <div className="activity-header">
                <h1 className="activity-header">Itinerary <img src={Add}    alt="add button" className="add-details-button" onClick={toggleActivityForm}/> 
                </h1>
                </div>
                <div> 
                    {details.activities.map(activity => <TimelineContainer activity={activity} />)}
                </div>
            </div>

        </div>
        }
    </div>
  );
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


{/* <div className="row column-container">

<div className="col-md-4 column-left">
<div><h1>{details.name}</h1></div>
<div><p>{details.description}</p></div>
<div><p>Hosted by, {details.user.name}</p></div>
<div><p>{details.date}</p></div>
<div><p>{details.location}</p></div>
</div>

<div className="col-md-4 column-middle">
<div><p>Guests: {!!details && details.guests.map(guest => <li>{guest.user.name}</li>)}</p></div>
<div><p>Accommodations: {details.accommodations.map(stay => <li>{stay.name}{stay.address}</li>)}</p></div>
<div><p>Transportation: {details.transportations.map(transportation => <li>{transportation.mode} - {transportation.date} -
    {transportation.details}</li>)}</p></div>
<div><p>Expenses: {details.expenses.map(expense => <li>{expense.name} - {expense.details} - {expense.amount}</li>)}</p></div>
<div><p>Packing List: {details.packing_lists.map(item => <li>{item.item}</li>)}</p></div>
</div>

<div className="col-md-4 column-right">
<div><p>Activities: {details.activities.map(activity => <li>{activity.name} - {activity.description}</li>)}</p></div>
</div>

</div>

 */}