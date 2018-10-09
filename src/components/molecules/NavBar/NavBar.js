import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => <div>
    <ul>
    <li><Link to="/">Home</Link></li>
        <li><Link to="/new">Add new task</Link></li>
        <li><Link to="/pending">Pending tasks</Link></li>
        <li><Link to="/completed">Completed tasks</Link></li>
    </ul>
</div>

export default NavBar;