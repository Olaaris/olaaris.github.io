import React from 'react';
import raph from './photos/raph.jpg';
import raphtemps from './photos/raphtemps.png'

class Raph extends React.Component{
  render() {
    return (
    <div className="Raph">
      <br></br>

      <h1>Recherché pour avoir le même mental qu'un enfant</h1>
      <br></br>
      <img src={raph}></img>
      <img src={raphtemps}></img>
      <div></div>
      <b>Raph</b>
    </div>
    );
  }


}
  
  export default Raph;