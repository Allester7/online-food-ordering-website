
import { CDN_URL } from "../utils/constants";
import AddButton from "./AddButton";
const MenuList = ({items , showButton = true}) => {
    console.log(items)
  return (

    <div>
      {items && items[0].card ? items.map((item, index) => (
        <div
          key={item.card.info.id}
          className="w-[100%] flex flex-col mt-4 border-b border-gray-200 transition duration-300 hover:shadow-lg hover:transform hover:scale-105"
        >
          <div className="flex grow ml-5">
            <div className="flex flex-col ml-4 w-8/12 flex-grow">
              <span className="font-extrabold ">{item?.card?.info?.name}</span>
              <span>
                ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item.card?.info?.defaultPrice / 100}
              </span>
              <div className="flex text-sm text-gray-700 ">
                <span>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}</span>
                <span>
                  ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </div>
              <span className="flex flex-wrap w-[80%] text-sm text-gray-700">
                {item?.card?.info?.description}
              </span>
            </div>
            <div className="w-3/12 h-40 relative">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt=""
                className="w-40 h-full rounded-2xl  object-cover"
              />
              <div className="absolute bottom-0 left-20 transform -translate-x-1/2 mb-2">
                {showButton && <AddButton
                  item={item}
                  index={index}
                  id={item?.card?.info?.id}
                />}
              </div>
            </div>
          </div>
        </div>
      )):
      items.map((item, index) => (
        <div
          key={item.info.id}
          className="w-[100%] flex flex-col mt-4 border-b border-gray-200 transition duration-300 hover:shadow-lg hover:transform hover:scale-105"
        >
          <div className="flex grow ml-5">
            <div className="flex flex-col ml-4 w-8/12 flex-grow">
              <span className="font-extrabold ">{item?.info?.name}</span>
              <span>
                ₹{" "}
                {item?.info?.price / 100 ||
                  item?.info?.defaultPrice / 100}
              </span>
              <div className="flex text-sm text-gray-700 ">
                <span>⭐{item?.info?.ratings?.aggregatedRating?.rating}</span>
                <span>
                  ({item?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </div>
              <span className="flex flex-wrap w-[80%] text-sm text-gray-700">
                {item?.info?.description}
              </span>
            </div>
            <div className="w-3/12 h-40 relative">
              <img
                src={CDN_URL + item?.info?.imageId}
                alt=""
                className="w-40 h-full rounded-2xl  object-cover"
              />
              <div className="absolute bottom-0 left-20 transform -translate-x-1/2 mb-2">
                <AddButton
                  item={item}
                  index={index}
                  id={item?.info?.id}
                />
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
};
export default MenuList;
