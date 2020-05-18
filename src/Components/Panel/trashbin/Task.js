import React, { Component } from 'react'
import { ReactSVG } from 'react-svg';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends Component {
    render() {
        return (
            <div className="panelContent">
                <Draggable draggableId={this.props.task.id} index={this.props.index}>
                    {(provided) => (
                        <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                        >
                            <ReactSVG
                                id={this.props.task.id}
                                src={this.props.task.content}
                            />
                            <p>{this.props.task.name}</p>
                        </div>
                    )}
                </Draggable>
            </div>

        )
    }
}
