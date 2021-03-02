import React from 'react';
import arthurp from './photos/arthurp.PNG';

class Arthur extends React.Component{
  render() {
    return (
    <div className="Arthur">
      <br></br>
      <h5>A trouvé l'amour grâce à https://filsdepute.ca</h5>
      <br></br>
      <img src={arthurp} className="inddang"></img>
      <div></div>
      <b>Arthur</b>
    </div>
    );
  }


}
  
  export default Arthur;