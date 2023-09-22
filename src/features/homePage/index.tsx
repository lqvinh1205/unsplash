import React from "react";
import { increment, decrement } from './slice';
import { useAppDispatch, useAppSelector } from "../../store/hooks";

type Props = {};

const HomePages = (props: Props) => {
  const count = useAppSelector((state) => state.homePage.value);
  const dispatch = useAppDispatch()

  return <div>
    HomePages
    <p>Count: {count}</p>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
  </div>;
};

export default HomePages;
