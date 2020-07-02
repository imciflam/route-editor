import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMarker } from '../actions/actions';

class MarkersInputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMarker: ''
        };
    }

    handleChange = e => this.setState({ newMarker: e.target.value });

    createMarker = e => {
        e.preventDefault();
        const randId = Math.floor(Math.random() * 1000)
        this.props.createMarker(randId, this.state.newMarker, this.props.center);
        this.setState({ newMarker: '' });
    }

    render() {
        return (
            <form onSubmit={this.createMarker}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newMarker}
                    required
                />
                <input type="submit" />
            </form>
        );
    }
}
const mapStateToProps = state => ({
    center: state.center
});

const mapDispatchToProps = dispatch => ({
    createMarker: (id, name, position) => dispatch(createMarker(id, name, position))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkersInputForm);
