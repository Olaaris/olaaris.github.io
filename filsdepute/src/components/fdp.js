import React from 'react';



class Fdp extends React.Component{

    state = {nom: '',raison: ''};

    submit = e => {
      e.preventDefault();
      let { nom, raison } = this.state;
      fetch('https://filsdeputeca.ue.r.appspot.com/api/fdp/', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom: nom,
        raison: raison,
      })
    }).then(response => response.json()).then(data => {
      alert("Fils de pute ajouté")
    })
        this.setState({nom: "", raison: ""});
    }

    change = e => {
        e.preventDefault();
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }
      
      render() {
        return (
          <div>
            <b>Ajouter un fils de pute</b>
            <form onSubmit={this.submit} class="d-flex justify-content-center p-2">
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <label class="sr-only" for="inlineFormInput">Nom</label>
                  <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Nom" value={this.state.nom} onChange={this.change} name="nom"/>
                </div>
                <div class="col-auto">
                  <label class="sr-only" for="inlineFormInput">Raison</label>
                  <div class="input-group mb-2">
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Raison" onChange={this.change} value={this.state.raison}  name="raison"/>
                  </div>
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-2">Ajouter</button>
                </div>
              </div>
            </form>
          </div>
        );
      }
    }

    export default Fdp;