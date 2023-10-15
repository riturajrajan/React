import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [ resInfo, setResInfo ] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId=" +
        resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
