import React, { Component } from 'react';
import styled from 'styled-components'
import Markers from './Markers';
import MapContainer from './MapContainer';
import { connect } from 'react-redux';


const Wrapper = styled.form`
display: flex;
justify-content: space-between; 
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <MapContainer
                    markers={this.props.markers}
                    lineCoordinates={this.props.markers.map(marker => marker.position)}
                    center={this.props.initialCenter}
                />
                <Markers markers={this.props.markers} />
            </Wrapper>
        );
    }
}
const mapStateToProps = state => ({
    markers: state.markers,
    initialCenter: state.initialCenter
});

export default connect(mapStateToProps)(App);
