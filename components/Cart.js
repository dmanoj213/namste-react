import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>
{
    const dispatch = useDispatch();

    const handleClearCart = ()=>
    {
        dispatch(clearCart());

    }

    const handleCheckout = () =>
    {
        alert("Your order has been placed succesfully");
    }
    const cartItems = useSelector((store)=> store.cart.items);
    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            {cartItems.length === 0 && <h1 className="font-bold text-xl">The Cart is Empty, Please add items to the cart</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
            <div className="text-center">
                <button onClick={
                    handleClearCart
                } className="bg-green-400 text-black  border-black rounded-md text-sm p-2 m-2">Clear Cart</button>
            </div>
            {cartItems.length !== 0 && <div className="text-center">
                <button onClick={
                    handleCheckout
                } className="bg-green-400 text-black  border-black rounded-md text-sm p-2 m-2">Proceed Checkout</button>
            </div>}
        </div>
    )
}

export default Cart;
