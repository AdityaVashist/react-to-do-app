import React from 'react';

const TextInput = props => <div>
    <label htmlFor={props.id}>{props.label} : </label>
    <input id={props.id} name={props.name} value={props.value} onChange={props.onChange} />
</div>

export default TextInput;