import React from 'react';
import TaskContainer from '../components/organisms/TaskContainer';
import NavBar from '../components/molecules/NavBar';

const PendingTask = () => <div>
    <TaskContainer filter="pending" />
    <NavBar />
</div>

export default PendingTask;