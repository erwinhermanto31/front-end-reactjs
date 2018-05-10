import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mahasiswa from './mahasiswa/MahasiswaCreateComponent.jsx';
import ListMahasiswa from './mahasiswa/MahasiswaListComponent.jsx';
import MahasiswaEdit from './mahasiswa/MahasiswaEditComponent.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4007/mahasiswa")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ data: [...json] });
      });
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to={'/Mahasiswa'}>Create Mahasiswa</Link></li>
              <li><Link to={'/MahasiswaList'}>List Mahasiswa</Link></li>
            </ul>
            <hr />

            <Switch>
              <Route exact path='/Mahasiswa' component={Mahasiswa} />
              <Route exact path='/Mahasiswa/:id' component={MahasiswaEdit} />
              <Route exact path='/MahasiswaList' component={ListMahasiswa} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
