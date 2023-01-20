import React from 'react';

const CartWidget = ({qCart}) => {
    return (
        <>
            <button><i class="fa-solid fa-cart-shopping"></i></button>
            <p>{qCart}</p>
        </>
    );
}

export default CartWidget;
