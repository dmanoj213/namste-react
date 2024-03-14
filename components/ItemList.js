import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>
{
    
    const dispatch = useDispatch();

    const handleAddItem = (item) =>
    {
        //dispatch an action
        dispatch(addItem(item))
        console.log(item);
    }

    
    return (<div>
       {items.map((item)=>
        <div data-testid="fooditems" key={item.card.info.id} className=" p-2 m-2 border-b-2 text-left border-gray-400 flex">
        <div className="w-9/12">
            <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                  <span>
                   - ₹ {item.card.info.price ? 
                    item.card.info.price/100 :
                    item.card.info.defaultPrice/100}
                </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
        </div>

        <div className="w-3/12 p-2 m-auto rounded-lg">
         <div className="py-2">

        <div>
        <button className=" bg-green-500 text-white shadow-lg" 
           onClick={()=>handleAddItem(item)}
          >Add +</button>
        </div>
        <div>
        <img src={CDN_URL + item.card.info.imageId} className="w-20"/>
       </div>

     </div>
        
        </div>
        
       
                
        </div>)}
    </div>) 
}

export default ItemList;

