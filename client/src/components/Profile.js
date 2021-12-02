function Profile({user}) {
    console.log(user)
    return (
        <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <img className="profile-image" src={user.image}></img>
            <h1 className="text-center profile-name">{user.name}</h1>
            <h3 className="text-center profile-bio">{user.bio}</h3>
          </div>
        </div>
        <div className='row justify-content-center marg-top-40'>
          <div className='col'>
            <div className="justify-content-center">
                <h1>Upcoming Planz: </h1>
              {user.all_events.map((event) =>
                <div className="event">
                  {event}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;