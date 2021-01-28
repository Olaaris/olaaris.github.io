import React from 'react';
import photo from './photos/lourick.png';
import useSound from 'use-sound';
import biere from './sounds/can.mp3';

class Lourick extends React.Component{

    
  render() {
    const BiereAction = () => {const [play] = useSound(biere);
    return <img src={photo} onClick={play}></img>
}
    return (
    <div className="Lourick">
      <br></br>

      <h5>Recherché pour démence et autres troubles mentaux</h5>
      <BiereAction/>
     <br></br>

      <div></div>
      <b>Lourick</b>
    </div>
    );
  }


}
  
  export default Lourick;