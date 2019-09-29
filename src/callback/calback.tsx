import React from 'react';

interface IProps {
  change: Function;
}

const Calbac: React.FC<IProps> = props => {
  console.log('props.change', props.change);
  return (
    <div>
      <h4>Testando callback </h4>
      <p>
        <input type="text" onChange={props.change().bind()} />
      </p>
    </div>
  );
};

export default Calbac;
