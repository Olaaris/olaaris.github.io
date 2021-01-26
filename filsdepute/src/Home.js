import React from 'react';

class Home extends React.Component{
  render() {
    return (
    <div className="Home">
        <b>Bienvenue sur mon site</b>
        <br></br>
        <a>Vous trouverez ici les plus grands fils de pute du Québec</a>
        <a>Fils de pute du jour</a>
        <NavDropdown.Item href="/fdp/Raph">Raph</NavDropdown.Item>
    </div>
    );
  }


}
  
  export default Home;