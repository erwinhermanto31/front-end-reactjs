import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import BarangEdit from './BarangEditComponent.jsx';

class ListBarang extends Component {
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
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama Barang</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(function (item, i) {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nama_barang}</td>
                                        <td>{item.deskripsi}</td>
                                        <td>{item.harga_barang}</td>
                                        <td>{item.gambar}</td>
                                        <td><Link to={`/Barang/${item.id}`}>Edit</Link> | <a>Delete</a></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <Switch>
                        <Route path="/Barang/:id" component={BarangEdit} />
                    </Switch>
                </table>
            </div>
        );
    }
}

export default ListBarang;
