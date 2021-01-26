
import './App.css';
import './components/component.css';
import Barre from './Barre'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Arthur from './components/Arthur';
import Raph from './components/Raph'
import Ben from './components/Ben'
import Lourick from './components/Lourick';
import Matisse from './components/Matisse';
import Vincent from './components/Vincent';
import Home from './Home';
import Alex from './components/Alex';
import FAQ from './components/FAQ';
import Liste from './components/Liste';
import Fdp from './components/fdp';


function App() {
  return (
    <div className="App">
    <Barre/>
      <header className="App-header">
    <BrowserRouter >
      <hr/>
      <div className="main-route-place">
      <Route path="/" component={Home} />
      <Route path="/fdp/Arthur" component={Arthur} />
      <Route path="/fdp/Lourick" component={Lourick} />
      <Route path="/fdp/Raph" component={Raph} />
      <Route path="/fdp/Ben" component={Ben} />
      <Route path="/fdp/Matisse" component={Matisse} />
      <Route path="/fdp/Vincent" component={Vincent} />
      <Route path="/fdp/Alex" component={Alex} />
      <Route path="/faq" component={FAQ}></Route>
      <Route path="/liste" component={Liste}></Route>
      <Route path="/ajouterfdp" component={Fdp}></Route>
      </div>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

    </BrowserRouter>
    </header>
    </div>
  );
}



export default App;
