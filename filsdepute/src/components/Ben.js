import React from 'react';
import photo from './photos/benoit.png';
import pirate from './photos/benoitpirate.jpg';



const imagesPath = {normal : photo,modif : pirate}
class Ben extends React.Component{
    state = {
        open: true
      }
      toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
      }
      getImageName = () => this.state.open ? 'normal' : 'modif'

  render() {
    const imageName = this.getImageName();
    return (
    <div className="Ben">
      <br></br>

      <h1>Recherché pour piraterie en territoire Somalien</h1>
      <br></br>
      
      <img id="image" src={imagesPath[imageName]} onClick={this.toggleImage}></img>
      <div></div>
      <b>Ben</b>
    </div>
    
    
    );

  }


}


  
  export default Ben;