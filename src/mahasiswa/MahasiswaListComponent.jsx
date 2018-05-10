import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import MahasiswaEdit from './MahasiswaEditComponent.jsx';

class ListMahasiswa extends Component {
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
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nim</th>
                            <th>Name</th>
                            <th>Alamat</th>
                            <th>Fakultas</th>
                            <th>Jurusan</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(function (item, i) {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nim}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.alamat}</td>
                                        <td>{item.fakultas}</td>
                                        <td>{item.jurusan}</td>
                                        <td><Link to={`/Mahasiswa/${item.id}`}>Edit</Link> | <a>Delete</a></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <Switch>
                        <Route path="/Mahasiswa/:id" component={MahasiswaEdit} />
                    </Switch>
                </table>
            </div>
        );
    }
}

export default ListMahasiswa;
