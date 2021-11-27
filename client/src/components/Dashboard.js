
function Dashboard({ user, setUser }) {

    return (
        <div>
            <h1>This is the Dashboard!</h1>
        </div>
    )
}

export default Dashboard;

//Dashboard will show all users Events
        //onClick of event it will show all the information for that particular event
            //Maybe it will dynamically route to the event information and you can click back to the dash to see all events
                //each information card will have a button to add new information
                        //The form will be a modal 
                        //This will make a POST request and add new information to the dashboard
        //There will also be an "add event" button which will add a new event card to the dash