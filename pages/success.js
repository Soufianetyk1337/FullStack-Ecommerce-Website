import React, { useContext, useEffect } from 'react'
import { Store } from '../context/StoreContext'
import { runCelebrationConfetti } from '../helpers';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useContext(Store);
    useEffect(() => {
        localStorage.clear()
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runCelebrationConfetti();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>Payment success</div>
    )
}

export default Success