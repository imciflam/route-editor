import React from 'react';

const MarkersListItem = ({ name, onDragOver, onDragEnd, onDragStart, onMarkerDelete }) => (
    <li onDragOver={onDragOver}>
        <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            {name}
            <span onClick={onMarkerDelete}> ⌫</span>
        </div>
    </li>
);

export default MarkersListItem;
