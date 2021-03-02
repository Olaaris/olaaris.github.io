import React from 'react';
import photo from './photos/matti.jpg';

class Matisse extends React.Component{
  render() {
    return (
    <div className="Matisse">
      <br></br>

      <h5>Recherché pour trop de drip</h5>
      <br></br>
      <img src={photo} className="inddang"></img>
      <div></div>
      <b>Matti</b>
    </div>
    );
  }


}
  
  export default Matisse;