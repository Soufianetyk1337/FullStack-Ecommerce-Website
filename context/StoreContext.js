import React, { createContext, useState } from "react";
import toast from "react-hot-toast";
export const Store = createContext();

const StoreContext = ({ children }) => {
    const [toggleShowCart, setToggleShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [totalQuantities, setTotalQuantities] = useState(0);

    const addProduct = (product, quantity) => {
        const productAlreadyInCart = cartItems.find(
            (item) => item._id === product._id
        );
        if (productAlreadyInCart) {
            cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity,
                    };
                }
            });
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        setTotalPrice(
            (previousTotalPrice) => previousTotalPrice + product.price * quantity
        );
        setTotalQuantities(
            (previousTotalQuantity) => previousTotalQuantity + quantity
        );
        setQuantity(1)
        toast.success(`${quantity} ${product.name.split(" ")[0]} Added to your cart`);
    };
    const deleteProduct = (product) => {
        const productToDelete = cartItems.find((item) => item._id === product._id);
        const updatedCartItems = cartItems.filter(
            (item) => item._id !== product._id
        );
        setTotalPrice(
            (previousTotalPrice) =>
                previousTotalPrice - productToDelete.price * productToDelete.quantity
        );
        setTotalQuantities(
            (previousTotalQuantites) =>
                previousTotalQuantites - productToDelete.quantity
        );
        setCartItems(updatedCartItems);
    };
    const incrementQuantity = () => {
        setQuantity((previousQuantity) => previousQuantity + 1);
    };
    const decrementQuantity = () => {
        setQuantity((previousQuantity) => {
            if (previousQuantity - 1 < 1) return 1;
            return previousQuantity - 1;
        });
    };
    const changeCartItemsQuantity = (id, type) => {
        const productById = cartItems.find((item) => item._id === id);
        const updatedCartItems = cartItems.filter((item) => item._id !== id);
        if (type === "increment") {
            setCartItems([
                ...updatedCartItems,
                { ...productById, quantity: productById.quantity + 1 },
            ]);
            setTotalPrice(
                (previousTotalPrice) => previousTotalPrice + productById.price
            );
            setTotalQuantities(
                (previousTotalQuantities) => previousTotalQuantities + 1
            );
        } else if (type === "decrement") {
            if (productById.quantity > 1) {
                setCartItems([
                    ...updatedCartItems,
                    { productById, quantity: productById.quantity - 1 },
                ]);
                setTotalPrice(
                    (previousTotalPrice) => previousTotalPrice - productById.price
                );
                setTotalQuantities(
                    (previousTotalQuantities) => previousTotalQuantities - 1
                );
            }
        }
    };
    return (
        <Store.Provider
            value={{
                toggleShowCart,
                setToggleShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                setTotalPrice,
                quantity,
                setQuantity,
                totalQuantities,
                setTotalQuantities,
                addProduct,
                deleteProduct,
                incrementQuantity,
                decrementQuantity,
                changeCartItemsQuantity,
            }}
        >
            {children}
        </Store.Provider>
    );
};

export default StoreContext;
