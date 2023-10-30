import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import MenuItemCategory from "./MenuItemCategory";
import { useState } from "react";

const RestaurantInfo = (props) => {
  const { restaurantInfo } = props;
  return (
    <div className="flex justify-between px-2 w-1/2 font-mono my-10">
      <div className="flex flex-col">
        <span className="text-xl font-extrabold">{restaurantInfo.name}</span>
        <span className="text-sm">{restaurantInfo.cuisines.join(", ")}</span>
        <span className="text-sm">{restaurantInfo.city}</span>
      </div>
      <div className="flex flex-col border-2 border-gray-200 rounded-lg text-xs text-center">
        <span className="p-2 border-b-2 border-gray-200">
          ⭐ {restaurantInfo.avgRatingString}
        </span>
        <span className="p-2">{restaurantInfo.totalRatingsString}</span>
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const info = useParams();
  const id = info?.id;
  const resMenu = useRestaurantMenu(id);

  const [selectedIndex, setSelectedIndex] = useState(null);

  if (resMenu === null) return null;

  const restaurantInfo = resMenu?.cards[0]?.card?.card?.info;

  const regular = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const itemCards = regular?.cards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const handleSelectIndex = (index) => {
    if(index === selectedIndex) {
        setSelectedIndex(null);
    } else {
        setSelectedIndex(index);
    }
  }
  return (
    <div className="flex flex-col place-items-center mt-4">
      <RestaurantInfo restaurantInfo={restaurantInfo} />
      {itemCards?.map((item, index) => (
        <MenuItemCategory
          data={item}
          displayItems={selectedIndex === index}
          setSelectedIndex={() => handleSelectIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
