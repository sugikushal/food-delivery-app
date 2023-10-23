import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
const RestaurantMenu = () => {

    const info = useParams();
    const id = info?.id; 

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_API+id);
        const jsonData = await data.json();
        console.log(jsonData)
        const regular = jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
        setMenu(regular?.cards[1].card?.card?.title === "Recommended" ? regular?.cards[1].card?.card?.itemCards : regular?.cards[2].card?.card?.itemCards);
    };

    if(menu === null) return null;

    return (
        <div className="restaurant-menu">
            <ul>
                {menu?.map((item) => {
                    console.log(item);
                    return (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                    )
                } )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;