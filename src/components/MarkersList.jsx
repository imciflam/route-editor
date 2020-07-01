import React from 'react';
import MarkerItem from './MarkerItem';
import { connect } from 'react-redux';
import { removeMarker } from '../actions/actions';

class MarkersList extends React.Component {

    removeMarker = id => this.props.removeMarker(id);

    render() {
        return (
            <ul >
                {this.props.markers.map(marker => (
                    <MarkerItem
                        key={marker.id}
                        name={marker.name}
                        onMarkerDelete={() => this.removeMarker(marker.id)}
                    />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    draggedItem: state.draggedItem
});

const mapDispatchToProps = dispatch => ({
    removeMarker: (id) => dispatch(removeMarker(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkersList);
