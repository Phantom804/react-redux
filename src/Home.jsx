import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const { c } = useSelector(state => state.custom);
    const dispatch = useDispatch();



    const addBtn = () => {
        dispatch({
            type: "increment",
        });
    };

    const addBtn25 = () => {
        dispatch({
            type: "incrementByValue",
            payload: 25,
        });
    };

    const subBtn = () => {
        dispatch({
            type: "decrement",
        });
    }

    return (
        <div>
            <h2>{c}</h2>

            <button onClick={addBtn}>Increament</button>
            <button onClick={addBtn25}>Incement by 25</button>
            <button onClick={subBtn}>Decreament</button>

        </div>
    )
}

export default Home