import React from 'react';
import useSound from 'use-sound';
import moulaga from './sounds/moulaga.mp3';

class FAQ extends React.Component{
  render() {
    const Moula = () => {const [play] = useSound(moulaga,{volume : 0.25});
        return <a onClick={play}>moula</a>
    }
    return (
    <div className="FAQ">
      <br></br>
      <h1>FAQ</h1>
        <b>Comment pouvons-nous attraper ces dangeureux criminels ?</b>
        <div>Ces hommes aiment la <Moula/> et feront tout pour la <Moula/>, il est recommandé de les appâter en utilisant la <Moula/> et d'appeller la police par la suite</div>
      <h1>Contact</h1>
      <a>will.boutet@gmail.com</a>
    </div>
    );
  }


}
  
  export default FAQ;