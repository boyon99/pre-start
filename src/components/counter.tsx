import {
  decrease,
  decreaseByDiff,
  increase,
  increaseByDiff,
  useCounter,
} from "../store/slices/counterSlice";

const Counter = () => {
  const { count, dispatch } = useCounter();
  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseByDiff = (diff: number) => {
    dispatch(increaseByDiff({ diff }));
  };
  const onDecreaseByDiff = (diff: number) => {
    dispatch(decreaseByDiff({ diff }));
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease}>+1</button>
      <button onClick={() => onDecreaseByDiff(2)}>-2</button>
      <button onClick={() => onIncreaseByDiff(2)}>+2</button>{" "}
    </div>
  );
};

export default Counter;
