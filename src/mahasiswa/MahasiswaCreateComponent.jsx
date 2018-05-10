import React, { Component } from 'react';

class Mahasiswa extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let reqBody = {
            nim: this.refs.nim.value,
            nama: this.refs.nama.value,
            alamat: this.refs.alamat.value,
            fakultas: this.refs.fakultas.value,
            jurusan: this.refs.jurusan.value
        };
        fetch('http://localhost:4007/mahasiswa', {
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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nim:
                    <input ref="nim" type="text" />
                </label>
                <label>
                    Nama:
                    <input ref="nama" type="text" />
                </label>
                <label>
                    Alamat:
                    <input ref="alamat" type="text" />
                </label>
                <label>
                    Fakultas:
                    <input ref="fakultas" type="text" />
                </label>
                <label>
                    Jurusan:
                    <input ref="jurusan" type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Mahasiswa;