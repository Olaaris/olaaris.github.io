import React from 'react';
import photo from './photos/lourick.png';

class Lourick extends React.Component{
  render() {
    return (
    <div className="Lourick">
      <br></br>

      <h1>Recherché pour démence et autres troubles mentaux</h1>
      <br></br>
      <img src={photo}></img>
      <div></div>
      <b>Lourick</b>
    </div>
    );
  }


}
  
  export default Lourick;