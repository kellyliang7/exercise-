import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { getMovies } from '../../util/util';


class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieToDisplay: undefined 
    }
  }

  componentDidMount() {
    getMovies().then(res => {
      console.log(res)
      this.setState({ movies: res.data})
    })
  }

  render() {
    return(
      <Switch>
        <Route exact path="/movies" render={() => {
          return <p>movies</p>
        }} />
      </Switch>
    )
  }
}

export default Movies; 