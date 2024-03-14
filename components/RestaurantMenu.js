import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./ItemList";



const RestaurantMenu = ()=>
{
    
   const {resId} = useParams();

   const resInfo = useRestaurantMenu(resId)

   const [showItems,setshowItems] = useState(false);

   const [showIndex,setshowIndex] = useState(null);

   

   if(resInfo === null) return <Shimmer />

    const {name,areaName,costForTwoMessage,cuisines} = resInfo?.cards[0]?.card?.card?.info;
    
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    
    // console.log(itemCards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
    filter((c)=>
       c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    console.log(categories);
    
    return (
        <div>
            <h2 className="text-center font-bold text-xl my-4 ">{name}</h2>
            <h3 className="text-center">{areaName}</h3>
            <h3 className="text-center">
                <p className="font-bold">
                {cuisines},{costForTwoMessage}
                </p>
            </h3>

            {categories.map((category , index)=>
                <RestaurantCategory 
                key = {category?.card?.card?.title}
                data={category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setshowIndex = {() => setshowIndex(index)}
                
                />
            )}
            {console.log(categories)}
        
        </div>
    )
}



export default RestaurantMenu;
