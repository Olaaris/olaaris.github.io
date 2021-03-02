import React, { useState } from 'react';
import ListeFdp from './listefdp'
import moment from "moment";
import { Button, Modal, ModalBody, NavDropdown } from 'react-bootstrap';
import FileBase64 from 'react-file-base64';


var handleShow;
var result,message;
class Liste extends React.Component{
  
  
  state = {nom: '',raison: '', isTrue: false};

  submit = e => {
    e.preventDefault();
    let { nom, raison } = this.state;
    fetch(            
    /*'https://api.filsdepute.ca/api/fdp'*/
    'https://localhost/api/fdp', 
    {
    method: 'POST',
    headers: {
      "Accept": "application/json",

    },
    body: JSON.stringify({
      nom: nom,
      raison: raison,
      date: moment().format("DD/MM/YYYY"),
      image: this.state.files.base64,
    })
  }).then(response => {
    console.log(response)
    if(response.ok){
      result = "Fils de pute ajouté"
      message = "Veuillez rafraîchir la page"
    } else {
      result = "Erreur !"
      message = "Veuillez vérifier les champs"
    }
    handleShow()

  })
  var is = !this.state.isTrue
  this.setState({isTrue: is})
  this.setState({nom: "", raison: ""})
  }


  getFiles(files){
    this.setState({ files: files })
    console.log(this.state.files.base64)
  }

  change = e => {
      e.preventDefault();
      this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }   

    render(){
        return(
        <div>
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
                <Popup></Popup>
                <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) }></FileBase64>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-2">Ajouter</button>
                </div>
              </div>
            </form>
          </div>
            <hr/>
            <ListeFdp isTrue={this.state.isTrue}/>
      </div>)

        
    }
}

//                <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) }></FileBase64>

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{result}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Liste;

