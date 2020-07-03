import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { addMarker } from '../actions/actions';


const MainForm = styled.form`
display: flex;
flex-direction: column;
padding:10px; 
`;

class MarkersInputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMarker: ''
        };
    }

    handleChange = e => this.setState({ newMarker: e.target.value });

    addMarker = e => {
        e.preventDefault();
        const randId = Math.floor(Math.random() * 1000)
        this.props.addMarker(randId, this.state.newMarker, this.props.center);
        this.setState({ newMarker: '' });
    }

    render() {
        return (
            <MainForm onSubmit={this.addMarker} >
                <label htmlFor="markerNameInput">Enter a name for a marker:</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newMarker}
                    id="markerNameInput"
                    required
                />
                <button>Submit</button>
            </MainForm>
        );
    }
}
const mapStateToProps = state => ({
    center: state.center
});

const mapDispatchToProps = dispatch => ({
    addMarker: (id, name, position) => dispatch(addMarker(id, name, position))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkersInputForm);
