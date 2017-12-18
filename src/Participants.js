import * as React from "react";

const Participants = props => (
  <div>
    {props.players.length !== 0 ? <h3>Players:</h3> : ""}
    <ol>
      {props.players.map((p, i) => (
        <li key={i}>
          {p}{" "}
          <button onClick={() => props.removePlayer(i)}>Remove player</button>
        </li>
      ))}
    </ol>
  </div>
);

export default Participants;
