import React, { Component } from 'react';
import { connect } from 'react-redux';
import MarkersList from './MarkersList';
import MarkersInputForm from './MarkersInputForm';

export class Markers extends Component {
    render() {
        return (
            <div>
                <MarkersInputForm />
                <MarkersList markers={this.props.markers} />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    markers: state.markers,
});

export default connect(
    mapStateToProps
)(Markers);
