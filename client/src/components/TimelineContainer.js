
function TimelineContainer( { activity } ){

    return(
        <div className="border">
            {/* <p>{activity.name}</p>
            <p>Date: {activity.date} Time: {activity.time}</p>
            <p>{activity.description}</p> */}


            <div class="container">
                <ul>
                    <li>
                    <span></span>
                    <div>
                        <div class="title">{activity.name}</div>
                        <div class="info">{activity.date}</div>
                        <div class="type">{activity.description}</div>
                    </div>
                    <span class="number">
                        <span>{activity.time}</span>
                    </span>
                    </li>
                
                </ul>
                </div>


          

        </div>

    )
}

export default TimelineContainer;