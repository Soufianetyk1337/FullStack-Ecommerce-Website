import Link from 'next/link';
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
        <div className=" max-800:min-h-[70vh] ">
            <div className="w-[1000px] m-auto mt-40 glass-background bg-white/30 p-12 rounded-2xl flex items-center justify-center flex-col max-800:w-96 max-800:mt-28 max-800:p-5 max-800:h-96">
                <p className="text-green-600 text-4xl">
                    <i className='bx bx-shopping-bag'></i>
                </p>
                <h2 className='text-lg capitalize mt-4 font-black text-white'>Thank you for your order!</h2>
                <p className="text-base leading-none text-center font-semibold">Check your email inbox for the receipt.</p>
                <p className="text-base leading-none font-semibold text-center m-7 text-black/70">
                    If you have any questions, please email us
                    <a className="ml-1 text-red-400" href="nike@gmail.com">
                        nike@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px"
                        className=" text-mercury flex items-center py-3 px-6 border-none rounded bg-burnt-sienna bg-sienna-to-blue bg-no-repeat bg-cover"
                    >
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success;