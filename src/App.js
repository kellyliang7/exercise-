import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from '../src/components/navbar/navbar';
import { Home } from '../src/components/home/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }
  render() {
    return (
      <div className="App">
       <NavBar />
       <main>
         <Switch>
           <Route path="/" component={Home}/>
           <Route path="/movies" />
           <Route path="/people" />
           <Route path="/locations" />
         </Switch>
       </main>
      </div>
    );
  }
}

export default App;
