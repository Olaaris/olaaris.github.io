import React from 'react';
import Fdp from './fdp';


class Liste extends React.Component{
    state = { isTrue: false, eventsState: [] }
    componentWillMount = () => {
      fetch('https://filsdeputeca.ue.r.appspot.com/api/fdp/').then(response => response.json()).then(data => {
        this.setState({eventsState:data.data})
        console.log(this.state.eventsState);
      })
  
    }

    render(){
        const fdps = this.state.eventsState.map(fdp => {
        return(
       <tr>
       <td scope="row">{fdp.id}</td>
       <td>{fdp.nom}</td>
       <td>{fdp.raison}</td>
       <td>{fdp.date}</td>
     </tr>
            )
        })
        return(
        <div>
            <Fdp/>
            <hr/>
            <h3>La liste</h3>
            <table class="table mt-4">
                <thead>
                <tr>
                    <th scope="col">#</th>
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

export default Liste;