import { useState } from 'react';

function AccommodationForm( { toggleAccommodationForm, id } ) {

    const [formData, setFormData] = useState({
        name: "", 
        address: "",
        event_id: "", 
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
          });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/accommodations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name, 
                address: formData.address,
                event_id: id
            }),
        })
        .then(response => response.json())
        .then(newAccommodation => {console.log(newAccommodation)
            toggleAccommodationForm()})
    }

    const refreshPage = ()=>{
        window.location.reload();
     }


    return (
        <div className="modal-form">
           <div onClick={toggleAccommodationForm} className="overlay"></div>
                <div className="modal-form-content" style={{backgroundColor: "#c5ebd7"}} >

                <h3 style={{backgroundColor: "#c5ebd7"}}>Add Accommodations</h3>

                <form className="new-event-form" onSubmit={handleSubmit}>
                    <div className="new-event-text-field" style={{backgroundColor: "#c5ebd7"}} >
                        <label htmlFor="name"></label>
                        <input  
                            className="event-form-text"
                            placeholder="Name"
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={formData.name}
                            onChange={handleChange}
                            />
                    </div>
                    <div className="new-event-text-field" style={{backgroundColor: "#c5ebd7"}}>
                        <label htmlFor="address"></label>
                        <input  
                            className="event-form-text"
                            placeholder="Address"
                            type="text"
                            name="address"
                            autoComplete="off"
                            value={formData.address}
                            onChange={handleChange}
                            />
                    </div>
                    
                    <div style={{backgroundColor: "#c5ebd7"}}>
                        <button className="new-detail-button" type="submit" onClick={refreshPage} >Done</button>
                    </div>
                </form>             

                </div>
       </div>
    )
}

export default AccommodationForm;