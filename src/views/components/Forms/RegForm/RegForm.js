
import { Link } from "react-router-dom";
import "../Form.css";
import axios from 'axios';
import React, { Component } from 'react'

export default class RegForm extends Component {
  
  state = {
    Name: '',
    Email: '',
    Password: ''
  }
  
  async componentDidMount() {
    const res = axios.get('http://localhost:5000/api/users/');
    console.log(res);
  }

  onSubmit = async e =>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/users',{
      Name: this.state.Name,
      Email: this.state.Email,
      Password: this.state.Password
    })
    console.log(res)
  }

  onChangeUsername = e => {
    this.setState({
      Name: e.target.value
    })
  }

  onChangeUserEmail = e => {
    this.setState({
      Email: e.target.value
    })
  }

  onChangeUserPassword = e => {
    this.setState({
      Password: e.target.value
    })
  }

  render() {
    
    return (
      <form className="RegForm" onSubmit={this.onSubmit}>
        <div className="labelInput">
          <label>Name:</label>
          <input type="text" id="name" className="form-control" name="name"   placeholder="Ex: Yuna"  value={this.state.Name} onChange={this.onChangeUsername } required />
        </div>
        <div className="labelInput">
          <label>E-mail:</label>
          <input type="text" id="email" name="email" placeholder="Ex: yuna@tasky.com" value={this.state.Email} onChange={this.onChangeUserEmail} required />
        </div>
        <div className="labelInput">
          <label>Password:</label>
          <input type="password" id="pass" name="pass" placeholder="******" value={this.state.Password} onChange={this.onChangeUserPassword} required />
        </div>
        <div className="labelInput">
          <label>Confirm password:</label>
          <input type="password" id="cpass" name="cpass" placeholder="******" required />
        </div>
        <div className="subBtn">
          <input type="submit" value="Register!" />
          <p>Do you already have an account? <Link to="/login">Log in!</Link></p>
        </div>
      </form>
    );
  }
}



