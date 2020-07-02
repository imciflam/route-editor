import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { connect } from 'react-redux';
import { changePosition, changeCenter } from '../actions/actions';


export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMarker: null,
            id: null
        };
    }

    onMarkerClick = (_props, marker, _e) => this.setState({ activeMarker: marker });

    onMarkerDragEnd = (coord, id) => {
        let { latLng } = coord;
        let lat = latLng.lat();
        let lng = latLng.lng();
        this.props.changePosition(id, { lat, lng });
    }

    deactivateMarker = () => { this.setState({ activeMarker: null }) }

    onCenterChanged = (_mapProps, map) => this.props.changeCenter(map.center);

    render = () => (
        <Map
            google={this.props.google}
            zoom={10}
            containerStyle={{ width: '60%' }}
            initialCenter={this.props.center}
            onCenterChanged={this.onCenterChanged}
            clickableIcons={true}
        >
            {(this.props.markers || []).map(marker => (
                <Marker
                    label={marker.name}
                    id={marker.id}
                    key={marker.id}
                    name={marker.name}
                    onDragend={(_t, _map, coord) => this.onMarkerDragEnd(coord, marker.id)}
                    draggable={true}
                    position={marker.position}
                    onClick={this.onMarkerClick}
                />
            ))}
            <InfoWindow
                visible={this.state.activeMarker !== null}
                onClose={this.deactivateMarker}
                marker={this.state.activeMarker}>
                {this.state.activeMarker ? this.state.activeMarker.name : ""}
            </InfoWindow>
            <Polyline
                path={this.props.lineCoordinates}
                geodesic={true}
            />
        </Map>
    );
}

const mapDispatchToProps = dispatch => ({
    changePosition: (id, position) => dispatch(changePosition(id, position)),
    changeCenter: ({ lat, lng }) => dispatch(changeCenter(lat(), lng()))
});


const googleWrap = GoogleApiWrapper({
    apiKey: 'AIzaSyBWohqCXZMM2XZgyuZowi9GXexqwNBIctc'
})(MapContainer);

export default connect(
    null,
    mapDispatchToProps
)(googleWrap);
