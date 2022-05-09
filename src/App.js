import logo from './logo.svg';
import './App.css';

function App() {

  function fetch(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function(){
    console.log(xhr.responseText);
  };
  xhr.send(); 
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sample App to test hosting on S3 + Added github actions+ secutity test +test"
        </p>
        <button onClick={fetch}>
           click to fetch
        </button>
      </header>
    </div>
  );
}

export default App;
