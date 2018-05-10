import React, { Component } from 'react';

class MahasiswaEdit extends React.Component {
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
        fetch(`http://localhost:4007/mahasiswa/${id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ jsonReturnedValue: json[0]});
                console.log(this.state.jsonReturnedValue.nim);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { id } = this.props.match.params;
        let reqBody = {
            nim: this.refs.nim.value,
            nama: this.refs.nama.value,
            alamat: this.refs.alamat.value,
            fakultas: this.refs.fakultas.value,
            jurusan: this.refs.jurusan.value
        };
        fetch(`http://localhost:4007/mahasiswa/${id}`, {
            method: 'PUT',
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
                    Nim:
                    <input ref="nim" type="text"    value={this.state.jsonReturnedValue.nim}  onChange={this.onChange} />
                </label>
                <label>
                    Nama:
                    <input ref="nama" type="text"  value={this.state.jsonReturnedValue.nama} onChange={this.onChange} />
                </label>
                <label>
                    Alamat:
                    <input ref="alamat" type="text"  value={this.state.jsonReturnedValue.alamat} onChange={this.onChange} />
                </label>
                <label>
                    Fakultas:
                    <input ref="fakultas" type="text"  value={this.state.jsonReturnedValue.fakultas} onChange={this.onChange} />
                </label>
                <label>
                    Jurusan:
                    <input ref="jurusan" type="text"  value={this.state.jsonReturnedValue.jurusan} onChange={this.onChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
}

export default MahasiswaEdit;