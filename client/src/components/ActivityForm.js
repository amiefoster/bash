import { useState } from 'react';

function ActivityForm( { toggleActivityForm, id } ) {
    const [formData, setFormData] = useState({
        name: "", 
        description: "",
        date: "", 
        time: "", 
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
        fetch("/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name, 
                description: formData.description,
                date: formData.name, 
                time: formData.time,
                event_id: id
            }),
        })
        .then(response => response.json())
        .then(newEvent => {console.log(newEvent)
        toggleActivityForm()})
    }

    return (
        <div className="modal-form">
           <div onClick={toggleActivityForm} className="overlay"></div>
                <div className="modal-form-content" style={{backgroundColor: "#e7dafa"}}>

                    <h3 style={{backgroundColor: "#e7dafa"}}>Add Activity</h3>

                    <form className="new-event-form" onSubmit={handleSubmit}>
                        <div className="new-event-text-field" style={{backgroundColor: "#e7dafa"}}>
                            <label htmlFor="name"></label>
                            <input  
                                className="event-form-text"
                                placeholder="Activity Name"
                                type="text"
                                name="name"
                                autoComplete="off"
                                value={formData.name}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="new-event-text-field" style={{backgroundColor: "#e7dafa"}}>
                            <label htmlFor="description"></label>
                            <input  
                                className="event-form-text"
                                placeholder="Description"
                                type="text"
                                name="description"
                                autoComplete="off"
                                value={formData.description}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="new-event-text-field" style={{backgroundColor: "#e7dafa"}}>
                            <label htmlFor="date"></label>
                            <input  
                                className="event-form-text"
                                placeholder="Date (mm/dd/yy)"
                                type="text"
                                name="date"
                                autoComplete="off"
                                value={formData.date}
                                onChange={handleChange}
                                />
                        </div>
                        <div className="new-event-text-field" style={{backgroundColor: "#e7dafa"}}>
                            <label htmlFor="time"></label>
                            <input  
                                className="event-form-text"
                                placeholder="Time (00:00:00)"
                                type="text"
                                name="time"
                                autoComplete="off"
                                value={formData.time}
                                onChange={handleChange}
                                />
                        </div>
                        
                        <div style={{backgroundColor: "#e7dafa"}}>
                            <button className="new-detail-button" type="submit" >Done</button>
                        </div>
                    </form>                      

                </div>
       </div>
    )
}

export default ActivityForm;