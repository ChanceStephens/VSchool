import React from 'react';

function Joke(props) {
  return (
    <div>
      <h3 className="setup">{props.setup}</h3>
      <h4 className="punchline">{props.punchline}</h4>
    </div>
  );
}

export default Joke;
