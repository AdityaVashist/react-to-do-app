import React from 'react';
import Task from '../../atoms/Task';
import Checkbox from '../../atoms/Checkbox';

const labels = {
    name: "Name",
    status: "Status",
    checkbox: "Done ?"
};

const TaskList = props => {
    let result = <div>---Task List Empty---</div>;
    if (props.tasks.length) {
        result = props.tasks.map((task,index) => <Task key={task.id} labels={labels} task={task}>
            <Checkbox checked={task.done} onChange={() => props.updateTaskStatus(index)} label={labels.checkbox} />
        </Task>)
    }
    return result;
}

export default TaskList;
