import React from 'react';
import photo from './photos/benoit.png';

class Ben extends React.Component{
  render() {
    return (
    <div className="Ben">
      <br></br>

      <h1>Recherché pour piraterie en territoire Somalien</h1>
      <br></br>
      <img src={photo}></img>
      <div></div>
      <b>Ben</b>
    </div>
    );
  }


}
  
  export default Ben;