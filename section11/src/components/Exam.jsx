import { useReducer, useRef, useState } from 'react';
import './Editor.css';

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      state;
  }
}

function Exam({ onCreate }) {
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
}

export default Exam;
