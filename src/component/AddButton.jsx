import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

import { useSelector } from "react-redux";
const AddButton = ({ item, id }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const count = cartItems.filter((item) => item?.info?.id === id);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    // Dispatch the addItem action

    dispatch(addItem(item));
  };
  const handleMinus = (item) => {
    dispatch(removeItem(item));
  };
  const handlePlus = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {count.length == 0 ? (
        <button
          className="bg-white w-15 h-10 rounded-2xl text-green-800"
          onClick={() => handleAdd(item.card)}
        >
          Add
        </button>
      ) : (
        <div className="bg-white w-15 h-10 rounded-xl flex justify-between items-center overflow-hidden">
          <button
            className="p-1 cursor-pointer border-1 border-black rounded-xl h-full w-5"
            onClick={() => handleMinus(item.card.info.id)}
          >
            -
          </button>
          <p className="font-bold text-sm text-gray-700">{count.length}</p>
          <button
            className="p-1 cursor-pointer border-1 border-black rounded-xl h-full w-5"
            onClick={() => handlePlus(item.card)}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
export default AddButton;
