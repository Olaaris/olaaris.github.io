import React from 'react';
import photo from './photos/matti.jpg';

class Matisse extends React.Component{
  render() {
    return (
    <div className="Matisse">
      <br></br>

      <h1>Recherché pour crimes en Angola en 1985</h1>
      <br></br>
      <img src={photo}></img>
      <div></div>
      <b>Matti</b>
    </div>
    );
  }


}
  
  export default Matisse;