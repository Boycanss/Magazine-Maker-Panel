import React, { Component } from 'react'
import './Panel.css'
import Draggable from 'react-draggable'
import { ReactSVG } from 'react-svg';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends Component {
    render() {
        return (
            <div className="dragContent">
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <div innerRef={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.tasks.map((task,index) =>( 
                            <Task key={task.id} task={task} index={index}/>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )


    }
}
