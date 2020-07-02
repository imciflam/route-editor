import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMarker } from '../actions/actions';

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
            <form onSubmit={this.addMarker} style={{ display: "flex", flexDirection: "column" }}>
                <label for="markerNameInput">Enter a name for a marker:</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newMarker}
                    id="markerNameInput"
                    required
                />
                <button>Submit</button>
            </form>
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
