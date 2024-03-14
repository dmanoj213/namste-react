import React, { Children, lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Outlet } from "react-router-dom";
import Error_Element from "./components/Error_Element";
import RestaurantMenu from "./components/RestaurantMenu";
import { useContext } from "react";
import UserContext from "./utils/UserContext";




// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



const AppLayout = () =>
{
    const [userName,setuserName] = useState();

    useEffect(()=>
    {
        const data = {
            name: "Manoj Kumar Vadhi",
        };
        setuserName(data.name);
    },[]);

    return (
    <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName,setuserName}}>
            <div className="app">
               <Header />
               <Outlet />
               
               
            </div>
        </UserContext.Provider>
    </Provider>
    )
    
}
const Grocery = lazy(()=> import("./components/Grocery"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout />,
        errorElement: <Error_Element />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:  <About />,
            },
        
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            
        ]
    },

    
    
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);




