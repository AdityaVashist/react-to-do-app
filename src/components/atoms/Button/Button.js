import React from 'react';

const Button = props => <div>
    <button type={props.type} name={props.name} onClick={props.onClick}>{props.label}</button>
</div>

export default Button;