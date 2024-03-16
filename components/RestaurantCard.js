import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>
{
 

  //UserContext
    const {loggedInUser} = useContext(UserContext);
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,locality} = resData?.info;
    console.log(resData);
    return (<div className="res-card m-4 p-4 w-[300px]  bg-gray-200 rounded-lg hover:bg-gray-400">
              <img className="res-logo rounded-lg w-[280px] h-[200px]" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
              <h3 className="font-bold size">{name}</h3>
              <h4 className="m-auto">{cuisines.join()}</h4>
              <h4>{avgRating}</h4>
              <h4>{locality}</h4>
              <h4>{loggedInUser}</h4>
            </div>)
}

export const withLabelOpen = (RestaurantCard) =>
{
   return (props)=>
   {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg">Is Open</label>
        <RestaurantCard {...props}/>
      </div>
      
      
    )
   }
}

export default RestaurantCard;
