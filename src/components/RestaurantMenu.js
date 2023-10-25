import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenu = () => {

    const info = useParams();
    const id = info?.id; 
    const resMenu = useRestaurantMenu(id);

    if(resMenu === null) return null;

    const regular = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const itemCards = (regular?.cards[1].card?.card?.title === "Recommended" ? regular?.cards[1].card?.card?.itemCards : regular?.cards[2].card?.card?.itemCards);

    return (
        <div className="restaurant-menu">
            <ul>
                {itemCards?.map((item) => {
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