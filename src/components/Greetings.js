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
        <div>
            <h1>{messages}</h1>
        </div>
    );
    };

export default Greenings;