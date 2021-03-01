import React from 'react';
import { useEffect, useState } from "react";
import { Button, Modal, NavDropdown } from 'react-bootstrap';

class ListeFdp extends React.Component{
    constructor(props) {
        super(props);
        this.state = 
        {  isTrue: false,
            eventsState: [],
            ref: Math.random()
                    };
    }
    componentWillMount = () => {
      fetch('https://18.218.193.149/api/fdp').then(response => response.json()).then(data => {
        this.setState({eventsState:data.data})
      })
  
    }

    refresh = () => {
        this.setState({ref:Math.random()})
        console.log(this.state);

    }

    componentDidUpdate(prevProps) {
        if (prevProps.isTrue  !== this.state.isTrue) {
            fetch('https://18.218.193.149/api/fdp').then(response => response.json()).then(data => {
                this.setState({eventsState:data.data})
              })
        }
    
      }

    render(){
        const fdps = this.state.eventsState.map(fdp => {
            return(
           <tr>
            <td>{fdp.nom}</td>
            <td>{fdp.raison}</td>
            <td>{fdp.date}</td>
            <td><Popup f={fdp}></Popup></td>
           </tr>
                )
            })
            return(
            <div>
                <div>
                    <div class="align-self-center">
                        <h3 class="text-center">La liste</h3>
                    </div>
                </div>

            
                <table class="table mt-4 table-dark table-striped table-responsive-sm">
                    <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Raison</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {fdps}
                    </tbody>
                </table>
                </div>)
    }
}

function Popup(f) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Info
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>{f.f.nom}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{f.f.raison}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }



export default ListeFdp;