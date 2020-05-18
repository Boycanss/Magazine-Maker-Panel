import React, { Component } from 'react'
import initialData from '../../Components/Panel/initialData';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

export default class Panel extends Component {
    state = initialData;

    onDragEnd= result =>{

    }
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />
                })}
            </DragDropContext>


        )

    }
}
