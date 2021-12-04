import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
import { useState } from 'react';
import Remove from "../images/remove.png";

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#fff2fb",
  },
  date: {
    backgroundColor: "#ae79fa",
    background: "none",
  },
  marker: {
    borderColor: "#ae79fa",
  },
  timelineTrack: {
    backgroundColor: "#ae79fa",
  },
});

function TimelineContainer({ activity, reload, setReload }) {

  const opts = {
    layout: "inline-evts-inline-date",
  };

  const handleActivityDelete = (id) => {
    fetch(`/activities/${id}`, {
      method: "DELETE", 
    })
    .then(setReload(!reload))
  }

  return (
    <div className="" style={{ paddingLeft: "none" }}>
      <Timeline opts={opts} theme={customTheme}>
        <Events>
          <TextEvent
            className="activity-card"
            date={`${activity.date}`}
            text={`${activity.name}`}
          >
            <p>{activity.time}</p>
            <p>{activity.description}</p>

            <div>
              <img
                src={Remove}
                className="details-delete-btn"
                onClick={() => handleActivityDelete(activity.id)}
              />
            </div>
          </TextEvent>
        </Events>
      </Timeline>
    </div>
  );
}

export default TimelineContainer;
