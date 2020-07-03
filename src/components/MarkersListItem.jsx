import React from 'react';
import styled from 'styled-components'

const Item = styled.li`
background: #f4f4f4;
padding: 10px;
border-bottom: 1px dotted #ccc;
`

const Button = styled.button`
background: rgb(201, 58, 82);
color: rgb(255, 255, 255);
cursor: pointer;
float: right;
border: 1px solid rgb(255, 0, 0);
border-radius: 2em;
font-size: 12px;
height: 20px;
line-height: 2px;
width: 20px; 
`

const MarkersListItem = ({ name, onDragOver, onDragEnd, onDragStart, onMarkerDelete }) => (
    <Item onDragOver={onDragOver}>
        <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            {name}
            <Button onClick={onMarkerDelete}>x</Button>
        </div>
    </Item>
);

export default MarkersListItem;
