import React from 'react';


class Fdp extends React.Component{

    state = {nom: '',recherche: ' '};

    submit = e => {

        e.preventDefault();
        alert('A name was submitted: ' + this.state.nom + " " + this.state.recherche);

        // Clear the form
        this.setState({nom: "", recherche: ""});
    }

    change = e => {
        e.preventDefault();
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
      
      render() {
        return (
            <div>
                <br/>
                <h1>Ajouter un fils de pute</h1>
          <form onSubmit={this.submit}>
              <hr></hr>
            <label>
              Nom
              <br/>
              <input type="text" name="nom" value={this.state.nom} onChange={this.change} /></label>
              <hr></hr>
              <label>
              Recherché pour 
              <br/>
              <input type="text" name="recherche" value={this.state.recherche} onChange={this.change} /></label>
              <hr/>
            <input type="submit" value="Submit" />
          </form>
          </div>
        );
      }
    }

    export default Fdp;