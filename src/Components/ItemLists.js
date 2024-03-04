import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemLists = ({items}) => {
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }
    //console.log("items",items)
  return (
    <div>{
      items.map((item)=>
      ( <div data-testid='fooditem' key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left hover:border-gray-300 flex 
      ">
        {/*<div className="py-2 "><img className="p-2" src={CDN_URL+item.card.info.imageId} alt="Menu"/>
            </div> */}
        
        <div className="py-2 w-9/12"> 
            <div>
            <span className="font-semibold">{item.card.info.name}</span>
            <span> - 💰 {item.card.info.price?item.card.info.price/100 :item.card.info.defaultPrice/100}</span>
        </div>
        <p className="text-xs">{item.card.info.description}</p></div>
        
        <div className="py-2 w-3/12 object-center">
            <div className="  absolute">
                <button className="bg-black p-0 mx-24 text-white font-thin rounded-md text-xs" onClick={()=>handleAddItem(item)}> Add+</button>
            </div>
            <img className=" w-3/4" src={CDN_URL+item.card.info.imageId} alt="Menu"/>
        </div> 

      
      
      </div>
      ))
        }
</div>)}
export default ItemLists
