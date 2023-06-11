import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/messageReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  if (greeting.length === 0) return <h2>loading...</h2>;

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '3em' }}>{greeting.greeting}</h2>
      </div>
    </>
  );
};

export default Greeting;
