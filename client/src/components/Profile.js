function Profile({ user }) {
  console.log(user.ordered_events);

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
        <div className="col-md-8 flex-wrap ">
            <h1 className="profile-planz-header" >Upcoming Planz:</h1>
            {user.ordered_events.map((event) => (
              <h5 className="profile-planz-card">{event.name} <div className="profile-date">{event.date}</div> </h5>
              
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
