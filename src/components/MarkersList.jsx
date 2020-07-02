import React, { Component } from 'react';
import MarkersListItem from './MarkersListItem';
import { connect } from 'react-redux';
import { removeMarker, setdragged, changeOrder } from '../actions/actions';

class MarkersList extends Component {

    onDragStart = (e, id) => {
        this.props.setdragged(id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = id => {
        if (id === this.props.dragged) { return; }
        this.props.changeOrder(id, this.props.dragged);
    };

    onDragEnd = () => this.props.setdragged(null);

    removeMarker = id => this.props.removeMarker(id);


    render() {
        return (
            <ul>
                {(this.props.markers || []).map(marker => (
                    <MarkersListItem
                        key={marker.id}
                        name={marker.name}
                        onDragOver={() => this.onDragOver(marker.id)}
                        onDragStart={e => this.onDragStart(e, marker.id)}
                        onDragEnd={this.onDragEnd}
                        onMarkerDelete={() => this.removeMarker(marker.id)}
                    />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    dragged: state.dragged
});

const mapDispatchToProps = dispatch => ({
    removeMarker: (id) => dispatch(removeMarker(id)),
    changeOrder: (afterId, markerId) => dispatch(changeOrder(afterId, markerId)),
    setdragged: (index) => dispatch(setdragged(index)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkersList);
