import { useState } from 'react';
import classes from './Counter.module.scss';
export const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>{' '}
      <button className={classes.button} onClick={increment}>
        +
      </button>
    </>
  );
};
