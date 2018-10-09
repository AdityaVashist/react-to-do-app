import React from 'react';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import {Redirect} from 'react-router';
import {withStore} from '../../../store';

class TaskForm extends React.Component {
    state = {
        redirect: false,
    }
    addTask = () => {
        this.props.store.updateStore((currentState) => ({
                tasks: [
                    ...currentState.tasks,
                    {
                        id: currentState.tasks.length + 1,
                        name: currentState.input.value,
                        done: false,
                        status: "Pending"
                    }
                ],
                input: {
                    value: ""
                }
            }), this.setRedirectParam.bind(this));
    }

    setRedirectParam() {
        this.setState({redirect: true});
    }

    updateInputValue = (e) => {
        this.props.store.updateStore({
            input: {
                value: e.target.value
            }
        })
    }
    render(){
        const store = this.props.store.getStore();

        if(this.state.redirect) {
            return <Redirect to="/" />
        }
        return <form>
            <h1>Create Task</h1>
            <TextInput id="name" name="name" label="Name" value={store.input.value} onChange={this.updateInputValue} />
            <br/>
            <Button type="button" name="add_task" label="Add Task" onClick={this.addTask} />
        </form>
    }
}

export default withStore(TaskForm);