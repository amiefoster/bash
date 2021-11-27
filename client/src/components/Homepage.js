import HomeNav from './HomeNav'

function Homepage( { user, setUser = () => console.log('') } ) {

    console.log(user)

    return (
        <div>
            <div className="container">
                    <div className="row justify-content-center"> 
                        <h2 className="col-sm-6 homepage-body">This is the Homepage!</h2>
                    </div>
                    
            </div>
        </div>
    )
}

export default Homepage;

//Homepage will display
    //Logo (top left)
    //Navbar with signup/login (top right)
        //two buttons as navlinks that render forms
                //log in form
                //sign up form 
                    //these will be modal forms that pop up over the landing page
    //Landing page picture (body)
