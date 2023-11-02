import { useDispatch, useSelector } from "react-redux";
import { addItem, setRestaurantInfo, updateAddItem, updateDeleteItem } from "../store/slices/cartSlice";
import { VEG, NON_VEG, MENU_ITEM_CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
  const dispatch = useDispatch();
  const { item, restaurantInfo } = props;
  const storeResInfo = useSelector((state) => state.cart.restaurantInfo);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const currentItem = cartItems.filter(cartItem => cartItem.id === item.id);
  
  const handleAddItem = () => {
    if (storeResInfo?.id && restaurantInfo.id !== storeResInfo.id) {
      alert("clear items from cart");
      return;
    }
    if (!storeResInfo?.id) {
      dispatch(setRestaurantInfo(restaurantInfo));
    }
    dispatch(addItem(item));
  };
  const increaseQuantity = () => {
    dispatch(updateAddItem(item.id));
  };
  const decreaseQuantity = () => {
    dispatch(updateDeleteItem(item.id));
  }
  return (
    <div
      className="flex justify-between p-4 border-b-2 border-gray-100 last:border-b-0"
      key={item.id}
    >
      <div className="flex flex-col justify-start pr-6">
        <img className="w-4 h-4 mb-2" src={item.isVeg ? VEG : NON_VEG} alt="" />
        <div className="font-mono">{item.name}</div>
        <span className="font-mono">₹{item.price / 100}</span>
        <span className="font-mono text-xs mt-3">{item.description}</span>
      </div>
      {item.imageId ? (
        <div className="w-32 h-36 min-w-max">
          <img
            className="w-32 h-32 rounded-lg object-cover"
            src={MENU_ITEM_CDN_URL + item.imageId}
            alt=""
          />
          <div className="flex justify-center relative bottom-5 font-mono">
            {currentItem.length > 0 ? (
              <div className="flex border border-gray-200 rounded-lg bg-white py-1 px-1 shadow-lg">
                <span className="px-2 cursor-pointer" onClick={decreaseQuantity}>-</span>
                <span className="px-2">{currentItem[0].quantity}</span>
                <span className="px-2 cursor-pointer" onClick={increaseQuantity}>+</span>
            </div>
            ) : (
              <button
                onClick={handleAddItem}
                className="border border-gray-200 rounded-lg bg-white py-1 px-7 shadow-lg"
              >
                Add
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-32 h-36 flex items-center justify-center min-w-max font-mono">
          {currentItem.length > 0 ? (
            <div className="flex border border-gray-200 rounded-lg bg-white py-1 px-1 shadow-lg ">
                <span className="px-2 cursor-pointer" onClick={decreaseQuantity}>-</span>
                <span className="px-2">{currentItem[0].quantity}</span>
                <span className="px-2 cursor-pointer" onClick={increaseQuantity}>+</span>
            </div>
          ) : (
            <button
              onClick={handleAddItem}
              className="border border-gray-200 rounded-lg bg-white shadow-lg font-mono py-1 px-7"
            >
              Add
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
