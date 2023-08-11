import React from 'react';

//Class component
class RegisterUser extends React.Component {
    //State in class component
    state = {
        name: "",
        email: "",
        phone: "",
        skill: "",
        hobby: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.phone === "" || this.state.skill === "" || this.state.hobby === ""){
            alert("All the fields are mandatory!");
            return
        }

        this.props.registerContactHandler(this.state);
        this.setState({name: "", email: "", phone: "", skill: "", hobby: ""});  //Update state with setstate()
    };

    render() {
        return (
            <div className = "ui main">
                //<h2>Register User</h2>
                <form className = "ui form" onSubmit = {this.add}>
                    <div className = "field">
                        <label>Name*</label>
                        <input type="text" name="name" placeholder="Name" 
                        value = {this.state.name} onChange = { (e) => this.setState({name: e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Email*</label>
                        <input type="text" name="email" placeholder="Email" 
                        value = {this.state.email} onChange = { (e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Phone Number*</label>
                        <input type="text" name="phone" placeholder="Phone Number" 
                        value = {this.state.phone} onChange = { (e) => this.setState({phone: e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Skillsets*</label>
                        <input type="text" name="skill" placeholder="Skillsets" 
                        value = {this.state.skill} onChange = { (e) => this.setState({skill: e.target.value})}/>
                    </div>
                    <div className = "field">
                        <label>Hobby*</label>
                        <input type="text" name="hobby" placeholder="Hobby" 
                        value = {this.state.hobby} onChange = { (e) => this.setState({hobby: e.target.value})}/>
                    </div>
                    <button className = "ui button blue">Register</button>
                </form>
            </div>
        );
    }
}

export default RegisterUser;