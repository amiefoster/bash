import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { useParams } from 'react-router-dom';
import Add from '../images/small-add.png'

function EventDetails({}) {
  const { eventId } = useParams();
  const [details, setDetails] = useState();
  
  useEffect(() => {
    getDetails();
  }, [eventId]);

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

{/* <div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured <img src={Add} alt="add button" onClick={console.log("ive been clicked!")}/>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
</div> */}
  

  return (
    <div>         
        { details &&
        <div className="row column-container">
            <div className="col-md-4 column-left">
                <div className="details-left">
                    <h1>{details.name}</h1>
                </div>
                <div>
                    <p>{details.description}</p>
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

            <div className="col-md-4 details-column-middle">
                <div className="card details-card" style={{width: "15rem"}}>
                    <div className="card-header">
                        Guests <img src={Add} alt="add button" className="add-details-button" onClick={console.log("ive been clicked!")}/>
                    </div>
                        {!!details && details.guests.map(guest => <li className="list-group-item">{guest.user.name}</li>)}
                </div>

               
                <div className="card details-card" style={{width: "15rem"}}>
                    <div className="card-header">
                        Accommodations <img src={Add} alt="add button" className="add-details-button" onClick={console.log("ive been clicked!")}/>
                    </div>
                    {details.accommodations.map(stay => <li className="list-group-item">{stay.name} Located at: {stay.address}</li>)}
                </div>

                <div className="card details-card" style={{width: "15rem"}}>
                    <div className="card-header">
                        Transportation <img src={Add} alt="add button" className="add-details-button" onClick={console.log("ive been clicked!")}/>
                    </div>
                    {details.transportations.map(transportation => <li className="list-group-item">{transportation.mode} - {transportation.date} - {transportation.details}</li>)}
                </div>

                <div className="card details-card" style={{width: "15rem"}}>
                    <div className="card-header">
                        Expenses <img src={Add} alt="add button" className="add-details-button" onClick={console.log("ive been clicked!")}/>
                    </div>
                    <p> {details.expenses.map(expense => <li className="list-group-item">{expense.name} - {expense.details} - ${expense.amount}</li>)}</p>
                </div>

                <div className="card details-card" style={{width: "15rem"}}>
                    <div className="card-header">
                        Packing List <img src={Add} alt="add button" className="add-details-button" onClick={console.log("ive been clicked!")}/>
                    </div>
                    <p> {details.packing_lists.map(item => <li className="list-group-item">{item.item}</li>)}</p>
                </div>
            </div>

            <div className="col-md-4 column-right">
                <div>
                    <p>Activities: {details.activities.map(activity => <li>{activity.name} - {activity.description}</li>)}</p>
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