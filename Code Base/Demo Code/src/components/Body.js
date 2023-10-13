import restaurants from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => (
  <div className="body-content">
    <div className="searchbox">
      <input type="text" />
    </div>
    <div className="res-container">
      {restaurants.map((res) => (
        <RestaurantCard resData={res.info} />
      ))}
    </div>
  </div>
);

export default Body;
