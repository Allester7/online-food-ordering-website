import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import Shimmer from "./Shimmer";
import { useState } from "react";

import RestaurantMenu from "./ResturantMenu";

const ResturantItems = () => {
  const { resId } = useParams();
  const resObj = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resObj === null) {
    return <Shimmer />;
  }
  const info = resObj.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName, sla } = info || {};
  const categories = resObj?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  const itemCategory = categories.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="p-4 bg-[#e8e1c4] min-h-screen">
        <div className="flex flex-col w-[100%]">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {name} 
        </h1>
        <div className="bg-[#e2d698] rounded-lg shadow-lg p-6 h-auto w-9/12 mx-auto flex flex-col items-start">
            <div className="flex flex-col items-start">
                <p className="text-lg font-semibold text-gray-800  text-center">
                    ⭐{avgRating}({totalRatingsString}) - {costForTwoMessage}
                </p>
                <p className="text-lg font-semibold text-gray-800 text-center px-6 underline">
                    {cuisines.join(", ")}
                </p>
          </div>
          <p className="text-lg  text-gray-800 text-center px-6">
                    Outlet - {areaName}
                </p>
                <p className="text-lg  text-gray-800 mb-4 text-center px-6">
                    Delivery within {sla.minDeliveryTime} - {sla.maxDeliveryTime} mins
                </p>
        </div>
      </div>
      <div className="p-6 mt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Menu
        </h2>
        {itemCategory.map((category, index) => (
          <RestaurantMenu
            key={category.card.card.itemCards[0].card.info.id}
            props={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
        </div>
    </div>
  );
};
export default ResturantItems;
