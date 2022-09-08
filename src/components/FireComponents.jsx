import React from "react";
import FirestationService from "../service/FirestationService";

class UserComponent extends React.Component {
    
constructor(props){
    super(props)
    
    this.state = {fires: [], valueTest: 1}  
}
test = (event) => {
    this.setState({valueTest: event.target.value})
}

connect=()=>{
    FirestationService.getFire(this.state.valueTest).then((response)=>{
        
        response === 0 ? this.setState({fires: []}) : this.setState({fires: response.data[0].personsStationList})
 
    })
}

render (){
    const numberStation = this.state.valueTest
    return (
        <div className="my-3">

            <h1 className="text-center my-3">Liste des personnes couvertes par la caserne de pompiers N°: {numberStation}</h1>
            <div>
                <input type='number' defaultValue={this.state.valueTest} onChange={this.test}/>
                <button type="submit" onClick={this.connect}>Envoyer</button>
            </div>
            <table className="table table-striped my-5">
                <thead>
                    <tr>
                        <td>FirstName</td>
                        <td>Lastname</td>
                        <td>Address</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.fires.map((
                        fire,index )=>
                    <tr key={`${fire.firstName}-${index}`}>
                        <td>{fire.firstName}</td>
                        <td>{fire.lastName}</td>
                        <td>{fire.address}</td>
                        <td>{fire.phone}</td>
                    </tr>
                    )}
                    
                </tbody>
            </table>

        </div>
    )
}
}
export default UserComponent