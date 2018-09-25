import React, { Component } from 'react';

class Barang extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let reqBody = {
            nama_barang: this.refs.nama_barang.value,
            deskripsi: this.refs.deskripsi.value,
            harga_barang: this.refs.harga_barang.value,
            file: this.refs.file.value
        };
        const formData = new FormData();
        fetch('http://localhost:8080/barangs', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
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
            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                <label>
                    Nama Barang:
                    <input ref="nama_barang" type="text" />
                </label>
                <label>
                    Deskripsi:
                    <input ref="deskripsi" type="text" />
                </label>
                <label>
                    Harga Barang:
                    <input ref="harga_barang" type="text" />
                </label>
                <label>
                    Gambar:
                    <input ref="file" type="file"  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Barang;