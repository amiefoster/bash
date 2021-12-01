
function GuestForm( { toggleGuestForm } ) {

    return (
        <div className="modal-form">
           <div onClick={toggleGuestForm} className="overlay"></div>
                <div className="modal-form-content">

                    <h3>This is where you can add a new guest</h3>
                    <h3>Add New Guest</h3>
                    <h3>Add New Guest</h3>
                    <h3>Add New Guest</h3>
                    <h3>Add New Guest</h3>
                   
                </div>
       </div>
    )
}

export default GuestForm;

//going to make a POST request to /guests and give it an id of the events id