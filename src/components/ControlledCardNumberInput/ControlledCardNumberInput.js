import React from 'react';

// This is an example of a "controlled" component.
// We call it this because the parent controls its data.
export default function ControlledCardNumberInput(props) {
  // The parent component is responsible for managing both
  // the "commited" and "draft" email states. It tells this component
  // which one to display by passing props.email.
  return (
    <label>
        Card numbers:
        <input data-input="card-number-input"
          value={props.number}
          onChange={props.handleChange}
          placeholder="0000 0000 0000 0000"
        />
    </label>
  );
}
