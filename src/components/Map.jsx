import React, { Component, Fragment } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { activeMarker: null }
    }

    render() {
        return (
            <Fragment>
                <div >
                    <Map
                        google={this.props.google}
                        zoom={10}
                        clickableIcons={true}
                        className="map"
                    >
                        {(this.props.markers || []).map(marker => (
                            <Marker
                                label={marker.name}
                                id={marker.id}
                                key={marker.id}
                                name={marker.name}
                                draggable={true}
                                position={marker.position}
                                onClick={this.onMarkerClick}
                            />
                        ))}
                        <InfoWindow
                            visible={this.state.activeMarker !== null}
                            onClose={this.deactivateMarker}
                            marker={this.state.activeMarker}>
                            <div className="infoWindow">{this.state.activeMarker ? this.state.activeMarker.name : ""}}</div>
                        </InfoWindow>
                        <Polyline
                            path={this.props.lineCoordinates}
                            geodesic={true}
                            options={{ strokeColor: "#ff2527" }}
                        />
                    </Map>
                </div>
            </Fragment>
        )
    }
}


const googleWrap = GoogleApiWrapper({
    apiKey: 'AIzaSyBWohqCXZMM2XZgyuZowi9GXexqwNBIctc'
})(MapContainer);


export default MapContainer
