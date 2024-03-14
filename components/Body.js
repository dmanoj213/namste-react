
import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withLabelOpen } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () =>
{
    
   
   const [listOfRestaurants,setListofRestaurant] = useState([])

   const[filteredRestaurants,setfilteredRestaurants] = useState([])

   const RestaurantOpen = withLabelOpen(RestaurantCard)

   const {loggedInUser,setuserName} = useContext(UserContext);

   const [searchText, setsearchText] = useState('');

    console.log("body rendered")

    useEffect(()=>{
        fetch_calls()
    },[])

    const fetch_calls = async () =>
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(setfilteredRestaurants)
        console.log(listOfRestaurants)
        
    }
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return (<h1>Looks like you are offline,please check your internet connectivity</h1>)


    if(listOfRestaurants.length===0)
    {
        return <Shimmer/>
    }

    


    return (<div className="body">
                <div className="filter">
                    <div className="search-container m-4 p-4 flex">
                         <input data-testid="searchInput" type="text" className="border border-solid border-black" value={searchText} 
                         onChange={(e) =>
                        {
                           setsearchText(e.target.value)

                        }}>

                        </input>
                         <button className="px-4 py-1 mx-4 my-1 bg-green-200 rounded-lg hover:bg-green-400" onClick={()=>
                        {
                            const filtered_Restaurants = listOfRestaurants.filter((res)=>res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
                            setfilteredRestaurants(filtered_Restaurants)
                        }}>Search</button>

                     <button className="px-4 py-1 mx-4 my-1 bg-yellow-100 rounded-lg hover:bg-yellow-200"
                     onClick={()=>{
                        const filtered = listOfRestaurants.filter((res)=> res?.info?.avgRating>=4.5)
                        setfilteredRestaurants(filtered)
                     }}
                     >Top Rated Restaurant</button>

                     <div>
                        <label>UserName:</label>
                        <input className="border border-black p-2"
                         value={loggedInUser}
                         onChange={(e)=>{
                           setuserName(e.target.value)
                         }}
                        />
                     </div>
                     
                    </div>
                    
                    
                </div>
                <div data-testid="resCard" className="res-container flex flex-wrap">
                    {filteredRestaurants.map((restaurant)=>{
                        return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }>
                            {restaurant.info.isOpen === true ? (<RestaurantOpen  resData={restaurant}/>) : (<RestaurantCard resData={restaurant}/>)}

                            
                            
                            </Link>  
                    })}

                    
                    
                    
                </div>
                

            </div>
                    )
}

export default Body;



