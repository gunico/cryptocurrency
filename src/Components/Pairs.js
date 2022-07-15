import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './Pairs.css'


function Pairs(props) {

  const [name] = useState(props.pair);

  const upperPair = props.pair.slice(0, 3).toUpperCase() + '/' + props.pair.slice(-3).toUpperCase();

  return (

    <>
      <Button variant="light" size="lg" className='pairsBorder pairText pairMargin'
      key={props.pair} onClick={() => props.getName(name)}>  {upperPair}</Button>
    </>


  );
}

export default Pairs;