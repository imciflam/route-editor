import React, { Component } from 'react'
import MarkersListItem from "./MarkersListItem"

export class MarkersList extends Component {

    items = this.props.markers.map((element, index) => {
        console.log(element)
        return <MarkersListItem key={index} itemData={element}
        />
    }
    )

    render() {
        console.log(this.props)
        return (
            <div>
                {this.items}
            </div >
        )
    }
}

export default MarkersList
