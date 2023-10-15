import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {

  const { resId } = useParams();
  const resInfo  = useRestaurantMenu(resId);

  if (!resInfo) {
    return <h1>Loading...</h1>;
  }

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h3>{resInfo.cards[0].card.card.info.name}</h3>
      <h4>{resInfo.cards[0].card.card.info.cuisines.join(", ")}</h4>
      <h4>{resInfo.cards[0].card.card.info.avgRating} rating</h4>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => {
          let menu = item.card.info;
          return (
            <li>
              {menu.name} - Rs.{menu.price / 100 || menu.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
