import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Barang from './barang/BarangCreateComponent.jsx';
import ListBarang from './barang/BarangListComponent.jsx';
import BarangEdit from './barang/BarangEditComponent.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/barangs")
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
              <li><Link to={'/Barang'}>Create Barangs</Link></li>
              <li><Link to={'/BarangList'}>List Barangs</Link></li>
            </ul>
            <hr />

            <Switch>
              <Route exact path='/Barang' component={Barang} />
              <Route exact path='/Barang/:id' component={BarangEdit} />
              <Route exact path='/BarangList' component={ListBarang} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
