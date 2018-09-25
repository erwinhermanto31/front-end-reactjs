import React, { Component } from 'react';

class BarangEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonReturnedValue: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onChange = (e) => {
        const state = this.state.jsonReturnedValue
        state[e.target.name] = e.target.value;
        this.setState({ jsonReturnedValue: state });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`http://localhost:8080/barangs/${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ jsonReturnedValue: json[0]});
                console.log(this.state.jsonReturnedValue.nama_barang);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { id } = this.props.match.params;
        let reqBody = {
            nama_barang: this.refs.nama_barang.value,
            deskripsi: this.refs.deskripsi.value,
            harga_barang: this.refs.harga_barang.value,
            gambar: this.refs.gambar.value
        };
        fetch(`http://localhost:8080/barangs/${id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong with your fetch');
            }
        }).then((json) => {
            console.log(json);
        });
    }

    render() {
        return (
            <div className="App">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nama Barang:
                    <input ref="nama_barang" type="text"    value={this.state.jsonReturnedValue.nama_barang}  onChange={this.onChange} />
                </label>
                <label>
                    Deskripsi:
                    <input ref="deskripsi" type="text"  value={this.state.jsonReturnedValue.deskripsi} onChange={this.onChange} />
                </label>
                <label>
                    Harga Barang:
                    <input ref="harga_barang" type="text"  value={this.state.jsonReturnedValue.harga_barang} onChange={this.onChange} />
                </label>
                <label>
                    Gambar:
                    <input ref="gambar" type="text"  value={this.state.jsonReturnedValue.gambar} onChange={this.onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default BarangEdit;