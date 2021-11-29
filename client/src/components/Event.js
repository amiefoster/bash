
function Event({ userEvent }) {
    console.log(userEvent.name)

    return (
        <div className="events">
            <h1>{userEvent.name}</h1>
            <p>{userEvent.date}</p>
            <p>Hosted by, {userEvent.user.name}</p>
        </div>
    )
}

export default Event;