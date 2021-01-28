import React from 'react';
import photo from './photos/vincent.jpg';

class Vincent extends React.Component{
  render() {
    return (
    <div className="Vincent">
      <br></br>

      <h5>Recherché pour avoir fait chié avec la grammaire</h5>
      <br></br>
      <img src={photo}></img>
      <div></div>
      <b>Vincent</b>
    </div>
    );
  }


}
  
  export default Vincent;