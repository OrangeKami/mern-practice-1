import React, { createRef} from 'react';
import axios from 'axios';


//  const navigate = useNavigate();

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();}

    submitPlayer(event) {
       
        
        event.preventDefault();

        axios.post('http://localhost:5000/players', {
            firstName: this.ref.firstName.value,
            lastName: this.ref.lastName.value,
            phone: this.ref.phone.value,
            email: this.ref.email.value,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        // navigator(-1);
    }

    render() { 
        return ( 
            <div className="row">
                <h1 className="center">Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="firstName" ref={this.myRef} type="text" />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="lastName" ref={this.myRef} type="text" />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="phone" ref={this.myRef} type="text" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" ref={this.myRef} type="text" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit"
                    nme="action">Add player</button>
                </form>
            </div>
        );
    }
}
 
export default PlayerForm;