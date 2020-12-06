import React from 'react';
import arthurp from './photos/arthurp.PNG';

class Arthur extends React.Component{
  render() {
    return (
    <div className="Arthur">
      <br></br>

      <h1>Recherché pour permaken</h1>
      <br></br>
      <img src={arthurp}></img>
      <div></div>
      <b>Arthur</b>
    </div>
    );
  }


}
  
  export default Arthur;