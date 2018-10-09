import React from 'react';
import TaskContainer from '../components/organisms/TaskContainer';
import NavBar from '../components/molecules/NavBar';

const CompletedTask = () => <div>
    <TaskContainer filter="completed" />
    <NavBar />
</div>

export default CompletedTask;