import React from 'react';

const Task = props => <li>
    <div><strong>{props.labels.name}</strong>: {props.task.name}</div>
    <div><strong>{props.labels.status}</strong>: {props.task.status}</div>
    {props.children}
</li>;

export default Task;