import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setshowIndex}) =>
{
   
    
    const handleClick = ()  =>
    {
        
        setshowIndex();
        

    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4  bg-gray-50 p-4  shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>⬇</span>
                </div>
                
                <div>
                 {showItems && <ItemList items={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;

