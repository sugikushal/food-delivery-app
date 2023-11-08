import { render, screen } from "@testing-library/react";
import restaurantInfo from "./mockData/RestaurantCardMock.json";
import restaurantInfoVeg from "./mockData/RestaurantCardVegMock.test.json";
import RestaurantCard, { VegRestaurant } from "../RestaurantCard";
import "@testing-library/jest-dom";

test("Should render Restaurant Card with props", () => {
    render(<RestaurantCard restaurantInfo={restaurantInfo} />);

    const resName = screen.getByText("Ambur Star Briyani");
    expect(resName).toBeInTheDocument();
});

test("Should render Restaurant Card with Pure Veg tag with veg res props", () => {
    const VegRestaurantCard = VegRestaurant(RestaurantCard);
    render(<VegRestaurantCard restaurantInfo={restaurantInfoVeg}/>);
    const vegTag = screen.getByText("Pure Veg");
    expect(vegTag).toBeInTheDocument();
})