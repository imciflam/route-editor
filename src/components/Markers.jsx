import React, { Component, Fragment } from 'react'
import MarkersInputForm from "./MarkersInputForm"
import MarkersList from "./MarkersList"

export class Markers extends Component {
    constructor() {
        super()
        this.state = { markers: ['1', 2, 3] }
    }

    render() {
        return (
            <Fragment>
                <div className="markers">
                    <MarkersInputForm />
                    <MarkersList markers={this.state.markers} />
                </div>
            </Fragment>
        )
    }
}

export default Markers
