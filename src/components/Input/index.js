import React from 'react';
import './style.sass';

const Input = (props) => (
  <div
    className="Input"
  >
    <form
      onSubmit={props.submit}
    >
      <div
        className="input-group"
      >
        <input
          autoFocus
          type="text"
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        />
        <div
          className="input-group-append"
        >
          <button
            type="submit"
            className="btn btn-outline-secondary"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default Input;
