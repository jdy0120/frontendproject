import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { increase, decrease, increaseBy } from "../modules/counter";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <div>
      <div className="number">{count}</div>

      <button onClick={onIncrease}>{`+1`}</button>
      <button onClick={onDecrease}>{`-1`}</button>
      <button onClick={() => onIncreaseBy(5)}>{`+5`}</button>
    </div>
  );
};

export default Counter;
