import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let [restaurantList, setFilteredRes] = useState([]); // default value to state variable
  let [searchText, setSearchText] = useState("");
  let [filteredrestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const response =
      json?.data?.cards[5]?.card.card.gridElements?.infoWithStyle?.restaurants;
    setFilteredRes(response);
    setFilteredRestaurant(response);
  };

  if (restaurantList.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body-content">
      <div className="action-btn">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setFilteredRestaurant(
              restaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(
              restaurantList.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredrestaurant.map((res) => (
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
