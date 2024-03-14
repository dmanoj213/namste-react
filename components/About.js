import React from "react";
import User from "./User";



class About extends React.Component
{
   constructor(props)
   {
    super(props);
    console.log("Parent Constructor")

   }

   componentDidMount()
   {
    console.log("Parent Component did mount")
   }

   render()
   {
    console.log("Parent Render")
    return (<div className="items-center text-center">
        <h1 className="font-bold p-4 m-4">About us</h1>
        <h2 className="p-4 m-4">This is a react class based component</h2>  
        <User name={"Manoj Kumar D"} place={"Mysore"} Designation={"frontend developer"}/> 
        {/* <UserClass name={"Tejas Kumar (Class)"} place={"Bangalore"} Designation={"AI developer"}/>     */}
    </div>)
   }
}

export default About;
