export const ResturantCard = (props) => {
  // const { resturantData } = props; /// *Destructuring
  //const { image, resName, resCusine, rating, costForTwo, deliveryTime } =
  //  resturantData; /// *Destructuring from Resturant Data

  const { image, resName, resCusine, rating, costForTwo, deliveryTime } =
    props?.resturantData; // !this is same as above 2 lines

  return (
    <div className="resturantcard" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="resturantImage" src={image} alt="resturantImage" />
      <h3>{resName}</h3>
      <h4>{resCusine}</h4>
      <h4>{rating} stars</h4>
      <h4>$ {costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
