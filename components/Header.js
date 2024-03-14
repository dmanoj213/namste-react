
import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
const Header = () =>
{

  console.log("Header Rendered")
  const [btnNameReact,setbtnNameReact] = useState("Login")

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);

  return (<div className="flex justify-between bg-pink-300 shadow-lg">
       <div className="logo-container">
         <img className="logo" src={LOGO_URL}/>
        </div>

        <div className="flex items-center">
            <ul className="flex p-4 m-4">
              <li>
                Online: {onlineStatus===true ? "✔"  : "🎃" }
              </li>
               <li className="px-1 mx-1 hover:font-bold"><Link to="/">Home</Link></li>
               <li className="px-1 mx-1 hover:font-bold"><Link to="/about">About us</Link></li>
               <li className="px-1 mx-1 hover:font-bold"><Link to="/contact">Contact us</Link></li>
               <li className="px-1 mx-1 hover:font-bold"><Link to="/grocery">Grocery</Link></li>
               <li className="px-1 mx-1 hover:font-bold">
               <Link to="/cart">Cart- ({cartItems.length})</Link>
               </li>
               <li className="px-1 mx-1">({loggedInUser})</li>
               <button onClick={()=> {
                  if(btnNameReact === "Login")
                  {
                    setbtnNameReact("Logout")
                  }
                  else{
                    setbtnNameReact("Login")
                  }
               }} className="border border-black bg-green-300 rounder-xl hover:bg-green-500">{btnNameReact}</button>
            
            </ul>
        </div> 
    </div>)
}


export default Header;
