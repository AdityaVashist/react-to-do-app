import React from "react";

const Checkbox = props => {
  return <div>
      <label for="task_status"><strong>{props.label}</strong></label>
      <input id="task_status" type="checkbox" checked={props.checked} onChange={props.onChange} />
    </div>;
};

export default Checkbox;
