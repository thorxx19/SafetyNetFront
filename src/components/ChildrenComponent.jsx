import React from "react";
import ChildrenService from "../service/ChildrenService";

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {personsAdulte: [],personsChildren: [], valueTest: '1509 Culver St'}
    }
    test = (event) => {
        this.setState({valueTest: event.target.value})
    }
    connect=()=>{
        ChildrenService.getChildren(this.state.valueTest).then((response)=>{
            console.log(response)
            response === 0 ? this.setState({personsAdulte: []}) : this.setState({personsAdulte: response.data[0].adult})
            response === 0 ? this.setState({personsChildren: []}) : this.setState({personsChildren: response.data[0].siblings.children})
        })
    }
render (){
    return (
<div className="my-3">

<h1 className="text-center my-3">children</h1>
<div>
    <input type='text' defaultValue={this.state.valueTest} onChange={this.test}/>
    <button type="submit" onClick={this.connect}>Envoyer</button>
</div>
<h1 className="my-4">Adult</h1>
<table className="table table-striped my-1">
    <thead>
        <tr>
            <td>FirstName</td>
            <td>Lastname</td>
        </tr>
    </thead>
    <tbody>
        {this.state.personsAdulte.map((
            person,index )=>
        <tr key={`${person.firstName}-${index}`}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
        </tr>
        )}
        
    </tbody>
    </table>
    <h1 className="my-4">Children</h1>
    <table className="table table-striped my-1">
    <thead>
        
        <tr>
            <td>FirstName</td>
            <td>Lastname</td>
        </tr>
    </thead>
    <tbody>
        {this.state.personsChildren.map((
            person,index )=>
        <tr key={`${person.firstName}-${index}`}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
        </tr>
        )}
        
    </tbody>
</table>

</div>



    )
}


}
export default UserComponent