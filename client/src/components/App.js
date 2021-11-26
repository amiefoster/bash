import '../App.css';

function App() {
  return (
    <div>
      
        <div class="container">

          <div class="row justify-content-center">
              <div class="col-sm-6 header-left">header left</div>
              <div class="col-sm-6 header-right">header right</div>
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
        </div>
      
    </div>
  );
}

export default App;
