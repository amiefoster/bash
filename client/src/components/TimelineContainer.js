import {
    Timeline,
    Events,
    TextEvent,
    themes, 
    createTheme
  } from '@merc/react-timeline';

  const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#fff2fb',
    },
    date: {
      backgroundColor: '#ae79fa',
    },
    marker: {
      borderColor: '#ae79fa',
    },
    timelineTrack: {
      backgroundColor: '#ae79fa',
    },
  });

function TimelineContainer( { activity } ){
        {/* <p>{activity.name}</p>
        <p>Date: {activity.date} Time: {activity.time}</p>
        <p>{activity.description}</p> */}

        const opts = {
            layout:"inline-evts-inline-date",
          };

    return(
        <div className="" style={{paddingLeft: "none"}}>
            <Timeline opts={opts} theme={customTheme}>
                <Events >
                    <TextEvent 
                        className="activity-card"
                        date={`${activity.date}`} 
                        text={`${activity.name}`} 
                        >
                            <p>{activity.time}</p>
                            <p>{activity.description}</p>
                
                        <div>
                            {/* <button className="new-detail-button" onClick={console.log("click")}>
                                X
                            </button> */}
                        </div>
                    </TextEvent>

                </Events>
            </Timeline>

          

        </div>

    )
}

export default TimelineContainer;