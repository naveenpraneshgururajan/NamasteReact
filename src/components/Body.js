import { ResturantCard } from "./ResturantCard";
import resturantList from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
  // Normal JS variable
  // const listOfResturantJs = [
  //   {
  //     resName: "Meghana Foods",
  //     resCusine: "Biriyani, North Indian, Asian",
  //     rating: 3.8,
  //     costForTwo: 40000,
  //     deliveryTime: 38,
  //     image:
  //       "https://img.pikbest.com/png-images/20241016/food-service-logo-for-restaurants_10965564.png!w700wp",
  //   },
  //   {
  //     resName: "Burger King",
  //     resCusine: "Burger, Sandwich, Letuse",
  //     rating: 4.3,
  //     costForTwo: 30000,
  //     deliveryTime: 76,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSoqDaRti61qrt65opWckM6Q0eubQj6Hwg&s",
  //   },
  //   {
  //     resName: "Kannur Food Points",
  //     resCusine: "Biriyani, Dosa ,Letuse",
  //     rating: 4.8,
  //     costForTwo: 10000,
  //     deliveryTime: 22,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlUXmQD4abfo86O3dvkSOUJyIBzUD0Z1g6w&s",
  //   },
  // ];

  // State Variable - Super powerful variable
  const [listOfResturant, setListOfResturant] = useState(resturantList); //Destructuring.. Usestate returns a variable and a fn

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfResturant = listOfResturant.filter(
              (res) => res.rating > 4,
            );
            setListOfResturant(filteredListOfResturant);
          }}
        >
          Top Rated Resturant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfResturant(resturantList);
          }}
        >
          Clear
        </button>
      </div>
      <div className="resturantContainer">
        {listOfResturant.map((data, index) => (
          <ResturantCard key={index} resturantData={data} /> // !not using Key is not acceptable and index should not be used as a key -- Its an Anti Pattern   - id (best practices)
        ))}
      </div>
    </div>
  );
};
