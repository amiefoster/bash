
function Event({ userEvent }) {
    console.log(userEvent.name)

    return (
        <div className="container">
            <div className="events" >
                <h1>{userEvent.name}</h1>
                <p>{userEvent.date}</p>
                <p>Hosted by, {userEvent.user.name}</p>

            </div>
        </div>
    )
}

export default Event;