import { useState } from 'react';

function TransportationForm( { toggleTransportationForm, id, user } ) {

    const [formData, setFormData] = useState({
        mode: "", 
        date: "",
        details: "",
        event_id: "", 
        guest_id: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
          });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/transportations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mode: formData.mode, 
                date: formData.date,
                details: formData.details,
                event_id: id,
                
            }),
        })
        .then(response => response.json())
        .then(newAccommodation => {console.log(newAccommodation)
            toggleTransportationForm()})
    }

    const refreshPage = ()=>{
        window.location.reload();
     }


    return (
        <div className="modal-form">
           <div onClick={toggleTransportationForm} className="overlay"></div>
                <div className="modal-form-content">

                    <h3>Add Transportation</h3>

                        <form className="new-event-form" onSubmit={console.log("submit")}>
                            <div className="new-event-text-field">
                                <label htmlFor="mode"></label>
                                <input  
                                    className="event-form-text"
                                    placeholder="Mode"
                                    type="text"
                                    name="mode"
                                    autoComplete="off"
                                    value={formData.mode}
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="new-event-text-field">
                                <label htmlFor="date"></label>
                                <input  
                                    className="event-form-text"
                                    placeholder="Date"
                                    type="text"
                                    name="date"
                                    autoComplete="off"
                                    value={formData.date}
                                    onChange={handleChange}
                                    />
                            </div>
                            <div className="new-event-text-field">
                                <label htmlFor="details"></label>
                                <input  
                                    className="event-form-text"
                                    placeholder="Flight no."
                                    type="text"
                                    name="details"
                                    autoComplete="off"
                                    value={formData.details}
                                    onChange={handleChange}
                                    />
                            </div>
                            
                            <div>
                                <button className="new-event-button" type="submit" onClick={console.log("refresh")} >Done</button>
                            </div>
                        </form>                            

                </div>
       </div>
    )
}

export default TransportationForm;