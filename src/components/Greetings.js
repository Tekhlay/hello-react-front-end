import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messageReducer';

const Greenings = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="container">
      <h3>{messages}</h3>
    </div>
  );
};

export default Greenings;
