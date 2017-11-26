import * as React from 'react';

const AddPlayerForm = (props) => (
  <div>
    <h3>Add player:</h3>
    <form onSubmit={props.onCreate}>
      <input type="text" />
      <button type="submit">Add player</button>
    </form>
  </div>
);

export default AddPlayerForm;