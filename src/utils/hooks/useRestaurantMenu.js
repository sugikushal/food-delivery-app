import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU_API+resId);
        const jsonData = await data.json();
        setResInfo(jsonData?.data);
    };
    return resInfo;
}

export default useRestaurantMenu;