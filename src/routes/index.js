import React from 'react';
import {Route} from 'react-router';
import Home from '../pages/home';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

// const Home = Loadable({
//   loader: () => import('../pages/home'),
//   loading: Loading,
// });

const PendingTask = Loadable({
  loader: () => import('../pages/pendingTask'),
  loading: Loading,
});

const CompletedTask = Loadable({
    loader: () => import('../pages/completedTask'),
    loading: Loading,
  });

const CreateTask = Loadable({
    loader: () => import('../pages/createTask'),
    loading: Loading,
});
    
const Routes = () => {
    return <div>
        <Route exact path="/" component={Home}/>
        <Route path="/pending" component={PendingTask}/>
        <Route path="/completed" component={CompletedTask}/>
        <Route path="/new" component={CreateTask}/>
    </div>
}

export default Routes;