import React from 'react';
import './style.scss';

const Input = (props) => (
  <div
    className="Input"
  >
    <form
      onSubmit={props.submit}
    >
      <input
        autoFocus
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  </div>
);

export default Input;
