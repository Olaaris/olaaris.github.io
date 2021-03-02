import React from 'react';
import raph from './photos/raph.jpg';
import raphtemps from './photos/raphtemps.png'

class Raph extends React.Component{
  render() {
    return (
    <div className="Raph">
      <br></br>

      <h5>Recherché pour avoir le même mental qu'un enfant</h5>
      <br></br>
      <img src={raphtemps} className="inddang"></img>
      <div></div>
      <b>Raph</b>
    </div>
    );
  }


}
  
  export default Raph;