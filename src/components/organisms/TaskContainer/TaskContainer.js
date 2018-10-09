import React from 'react';
import TaskList from '../../molecules/TaskList';
import {withStore} from '../../../store';

class TaskContainer extends React.Component {
    updateTaskStatus = index => {
        const { store } = this.props;
        const { tasks } = store.getStore();
        tasks[index].done = !tasks[index].done;
        tasks[index].status = tasks[index].done ? "Completed" : "Pending";
        store.updateStore({
            tasks: [...tasks]
        });
    }

    fetchTasks() {
        const {store} = this.props;
        let {tasks} = store.getStore();
        const {filter} = this.props;

        if(filter) {
            return tasks.filter(task => {
                switch(filter) {
                    case 'pending':
                        return task.done === false;
                    case 'completed':
                        return task.done === true;
                    default:
                        return task;
                }
            })
        }

        return tasks;
    }

    render() {
        const tasks = this.fetchTasks();

        return <div>
            <h1> Task List </h1>
            <TaskList updateTaskStatus={this.updateTaskStatus} tasks={tasks} />
        </div>;
    }
}

export default withStore(TaskContainer);
