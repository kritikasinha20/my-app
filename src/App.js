
import './App.css';
import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuComponent from './Components/MenuComponent';
 class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Restraunt</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent/>
      </div>
    )
  }
}


export default App;
