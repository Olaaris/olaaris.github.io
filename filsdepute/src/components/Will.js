import React from 'react';
import photo from './photos/will.jpg';
import useSound from 'use-sound';
import glitch from './sounds/glitch.mp3';

class Vincent extends React.Component{
    componentDidMount = () => {
        this.audio = new Audio(glitch)
        this.audio.load()
        this.playAudio()
    }
    playAudio() {
        const audioPromise = this.audio.play()
        if (audioPromise !== undefined) {
          audioPromise
            .then(_ => {
              // autoplay started
            })
            .catch(err => {
              // catch dom exception
              console.info(err)
            })
        }
    }
  render() {
    return (
    <div className="Vincent">
      <br></br>

      <h5>ɮéռɨ ֆօɨȶ ɖɨɛʊ, ʟɛ քèʀɛ ɖɛ ʝéֆʊֆ, ʟɛ ƈɦʀɨֆȶ, ռօȶʀɛ ֆɛɨɢռɛʊʀ, զʊɨ ռօʊֆ ǟ ɮéռɨ ɛȶ ƈօʍɮʟé ɖɛֆ ɮéռéɖɨƈȶɨօռֆ, ɖɛ ʟ'ɛֆքʀɨȶ, ǟʊ ƈɨɛʟ, ɖǟռֆ ʟɛ ƈɦʀɨֆȶ</h5>
      <br></br>
      <img src={photo}></img>
      <div></div>
      <b>W̴͙͕̟͇̅̓̿͋̊͊i̴̡̢̨̧̮̟͈̻͖̳͚͙̩̰̮̖̲̝̅̃͗͒̂͑̽̈́̃͌̾̉̂̋͐́͋̕̚͘̚͝l̸̢̝̻̙̤̩̳̖͇͙̤͔͉̹̭̬̔̍̔͗̓̓̊̓͂̍̕l̵̢̗̦̪̘̫̭͙̗̟̮̻̻̀͂̐̍̈́͌̀̍͝͝ͅi̷̡̛̛̲͇͈̣̦̠̞̲̰̾̈̔́̑̾͗͌͘a̵̡̡̢̧͙̖̝̜̼̰̱̬͎̅̋̈́͘͜͜m̷̨̧̢̧̡͇̤̠̖̙͚̣̬̻͈͉͎͉̞͍͂̀͊̅̋͂̄̓̇̃́̇͌̎̍̿̏̕͘</b>
    </div>
    );
  }


}
  
  export default Vincent;