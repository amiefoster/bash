import {
  Timeline,
  Events,
  TextEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";

function Profile({ user }) {
  const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: "#fff2fb",
      padding: "30px",
    },
    date: {
      backgroundColor: "#ae79fa",
      background: "none",
    },
    text: {
        padding: "30px",
    },
    marker: {
      borderColor: "#ae79fa",
      backgroundColor: "#fff2fb"
    },
    timelineTrack: {
      backgroundColor: "#ae79fa",
    },
    timeline: {
      fontSize: "20px",
    }
  });

  const opts = {
    layout: "alt-evts",
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3  profile-pic-container">
          <img className="profile-image" src={user.image}></img>
          <p className="text-center profile-username">@{user.username}</p>
        </div>
        <div className="col-md-7  profile-info-container">
          <h1 className="text-left profile-name">{user.name}</h1>

          <h5 className="text-left profile-bio">{user.bio}</h5>
        </div>
      </div>

      <div className="row justify-content-center profile-planz-container">
        <div className="col-md-8 ">
          <h1 className="profile-planz-header">Upcoming Planz:</h1>
          <div className="profile-planz-timeline">
            <Timeline opts={opts} theme={customTheme}>
              <Events>
                {user.ordered_events.map((event) => (
                  <TextEvent
                    className="activity-card"
                    date={`${event.date} - ${event.end_date}`}
                    text={`${event.name}`}
                  ></TextEvent>
                ))}
              </Events>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
