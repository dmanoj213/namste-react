import { useState } from "react";
const User = (props) =>
{
    const {name,place,Designation} = props;

    const [Count,setCount] = useState(0);

    const [Count2,setCount2] = useState(0);
    return (
        <div className="user-container">
            <h1 className="p-2 m-2">Count:{Count}</h1>
            <button className="p-2 m-2 border border-black bg-green-400 rounded-lg hover:bg-green-600" onClick={
                ()=>
                {
                    setCount(Count + 1);
                }
            }>
              Increase Count
            </button>
            <h1>Count2:{Count2}</h1>
            <button className="p-2 m-2 border border-black bg-green-400 rounded-lg hover:bg-green-600" onClick={
                ()=>
                {
                    setCount2(Count2 + 1);
                }
            }>Increase Count2</button>
            <h2 className="p-2 m-2 font-bold">Name : {name}</h2>
            <h3 className="p-2 m-2 font-bold">Location: {place}</h3>
            <h4 className="p-2 m-2 font-bold">Designation:{Designation}</h4>

        </div>
    )
}

export default User;
