import React, { Component } from 'react'

export class MarkersListItem extends Component {
    render() {
        return (
            <div>
                {this.props.itemData}
            </div>
        )
    }
}

export default MarkersListItem
