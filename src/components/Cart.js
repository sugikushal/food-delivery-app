import { useDispatch, useSelector } from "react-redux";
import { clearCart, updateAddItem, updateDeleteItem } from "../store/slices/cartSlice";
import { VEG, NON_VEG } from "../utils/constants";

const Cart = () => {
  const resInfo = useSelector((state) => state.cart.restaurantInfo);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const increaseQuantity = (id) => {
    dispatch(updateAddItem(id));
  };
  const decreaseQuantity = (id) => {
    dispatch(updateDeleteItem(id));
  }
  return (
    <div className="flex flex-col items-center font-mono">
        {
            cartItems.length > 0 ? <div className="w-1/2">
        <div className="flex my-10">
          <div className="flex flex-col">
            <span className="text-xl font-extrabold">{resInfo.name}</span>
            <span className="text-sm">
              {resInfo.locality} - {resInfo.city}
            </span>
          </div>
        </div>
        <div className="flex justify-between my-10">
          <span className="text-lg">Cart</span>
          <button
            className="border border-gray-200 rounded-lg bg-white py-1 px-4 shadow-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.map(item => {
            return (
                <div key={item.id} className="py-7 border-b-2 border-gray-100 last:border-b-0">
                    <div className="flex justify-between">
                        <div className="flex basis-2/3">
                            <img className="w-4 h-4 mt-1" src={item.isVeg ? VEG : NON_VEG} alt="" />
                            <span className="ml-4">{item.name}</span>
                        </div>
                        <div className="flex items-center">
                            <div className="border border-gray-200 rounded-lg bg-white px-2 py-1 shadow-lg">
                                <span className="cursor-pointer" onClick={() => decreaseQuantity(item.id)}>-</span>
                                <span className="mx-5">{item.quantity}</span>
                                <span className="cursor-pointer" onClick={() => increaseQuantity(item.id)}>+</span>
                            </div>
                            <span className="ml-10">₹ {(item.price * item.quantity) / 100}</span>
                        </div>
                    </div>
                </div>
            )
        } )}
      </div> : <div className="text-lg w-1/2 text-center my-10">Your Cart is Empty</div>
        }
      
    </div>
  );
};
export default Cart;
