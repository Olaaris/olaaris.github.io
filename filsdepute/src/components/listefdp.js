import React from 'react';


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
           </tr>
                )
            })
            return(
            <div>
                <div class = "d-flex justify-content-between">
                    <div class="align-self-center">
                        <h3 class="text-center">La liste</h3>
                    </div>
                    <div class="col-md-auto"> 
                        <button onClick={this.refresh} class="btn btn-primary mb-2 float-right">Refresh</button>
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



export default ListeFdp;