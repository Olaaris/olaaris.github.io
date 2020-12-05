
import './App.css';
import Barre from './Barre'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Arthur from './Arthur';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Barre/>
      <header className="App-header">
      <Route path="/" component={Home} />
      <Route path="/fdp/Arthur" component={Arthur} />
      </header>


    </div>
  );
}



export default App;
