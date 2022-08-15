import confetti from 'canvas-confetti';
import React from 'react';
import Star from '../components/Star';

export const formatProductName = (name) =>
    name?.toLowerCase().replace(/\s+/g, "-").slice(0, 96);

export const calculateDiscount = (price, discount) => {
    const priceAfterDiscount = price - (price * discount) / 100
    return formatter.format(priceAfterDiscount)
}



export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


export const runCelebrationConfetti = () => {
    var duration = 2 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}


export const averageRatingToStars = (averageRating, starIndex) => {
    let starElements = [];
    if (averageRating > 0) {
        let newRating = averageRating * 10;

        for (let i = 0; i < 5; i++) {
            if (newRating > 0) {
                starElements.push(
                    <Star
                        height="16px"
                        width="16px"
                        classes="mr-2"
                        fillColorOffset={newRating > 10 ? 100 : newRating * 10}
                        fillColor="rgba(248,102,87,100)"
                        emptyColor="#FFCF9F"
                        index={(i + 1) * 5 + (starIndex + 1)}
                    />
                );
                newRating -= 10;

            } else {
                starElements.push(
                    <Star
                        height="16px"
                        width="16px"
                        classes="mr-2"
                        fillColorOffset={0}
                        fillColor="rgba(248,102,87,100)"
                        emptyColor="#FBDCBC"
                        index={(i + 1) * 5 + (starIndex + 1)}

                    />
                );
            }
        }

    }
    return React.createElement(React.Fragment, {}, ...starElements);
};