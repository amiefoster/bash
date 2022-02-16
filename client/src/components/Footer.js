import Github from '../images/github.png';
import LinkedIn from '../images/linkedin.png';
import Email from '../images/email.png';

function Footer(){
    return(
        <div className="login-footer">
            <div className="row footer">
                <div className="col footer-content">
                    Made with ♡ by Amie Foster

                    <a href="https://github.com/amiefoster" target="_blank">
                      <img className="footer-link"  src={Github} />  
                    </a>

                    <a href="https://www.linkedin.com/in/amie-n-foster/" target="_blank">
                      <img className="footer-link" src={LinkedIn} /> 
                    </a>

                    <a href="mailto: amie.n.foster@gmail.com" target="_blank">
                      <img className="footer-link" src={Email} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;

/* <div class="container">
  <div class="row justify-content-center header-container">
    <div class="col-sm-6 header-left">LOGO goes here</div>
    <div class="col-sm-6 header-right">Nav Links go here</div>
  </div>

  <div className="row column-container">
    <div className="col-md-4 column-left">
      <h1>Div 1</h1>
    </div>
    <div className="col-md-4 column-middle">
      <h1>Div 2</h1>
    </div>
    <div className="col-md-4 column-right">
      <h1>Div 3</h1>
    </div>
  </div>
</div>; */