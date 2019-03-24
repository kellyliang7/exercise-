import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from '../src/components/navbar/navbar';
import { Home } from '../src/components/home/home';
import Movies from '../src/components/movies/movies';

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavBar />
       <main>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/movies" component={Movies}/>
           <Route path="/people" />
           <Route path="/locations" />
         </Switch>
       </main>
      </div>
    );
  }
}

export default App;
