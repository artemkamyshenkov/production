import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <button onClick={increment} type="button" data-testid="increment-btn">
        +
      </button>
      <button onClick={decrement} type="button" data-testid="decrement-btn">
        -
      </button>
    </div>
  );
};
