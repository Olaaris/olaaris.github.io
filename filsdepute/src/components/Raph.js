import React from 'react';
import raph from './photos/raph.jpg';

class Raph extends React.Component{
  render() {
    return (
    <div className="Raph">
      <br></br>

      <h1>Recherché pour shooting dans une mosquée</h1>
      <br></br>
      <img src={raph}></img>
      <div></div>
      <b>Raph</b>
    </div>
    );
  }


}
  
  export default Raph;