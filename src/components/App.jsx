import React, { Component } from 'react';
import Markers from './Markers';
import MapContainer from './MapContainer';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MapContainer
                    markers={this.props.markers}
                    center={this.props.initialCenter}
                    lineCoordinates={this.props.markers.map(marker => marker.position)}
                />
                <Markers markers={this.props.markers} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    markers: state.markers,
    initialCenter: state.initialCenter
});

export default connect(mapStateToProps)(App);
