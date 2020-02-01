import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardlist/cardlist.component';
import { Searchbox } from './components/searchbox/searchbox.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      string : "It's awesome",
      
      players : [],

      searchField : ""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersArray => this.setState({players : usersArray}));
  }

  render(){

    const {players, searchField} = this.state;

    const filteredPlayers = players.filter((player) => 
      player.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return(

      <div className="App">

          <h1>Players Management System</h1>

          <Searchbox
          placeholder="Search players..."
          handleChange = {(e) => {
            this.setState({searchField : e.target.value}, () => {
              console.log(this.state.searchField);
            })
          }}
          />

          <CardList players={filteredPlayers}/>

          <h2>{this.state.string}</h2>
          <button onClick={ () => {
            if(this.state.string === "It's Awesome"){
              this.setState({string : "It's Magic"})
            }
            else{
              this.setState({string : "It's Awesome"})
            }
            }}>React</button>
    
      </div>

    )
  }
}

export default App;
