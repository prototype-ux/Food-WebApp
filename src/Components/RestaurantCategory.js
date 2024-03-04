//import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({Category,showItems,setshowIndex,setclick}) => {
//console.log("Category",Category);
//const [showItems, setshowItems]=useState(false);
//------------------lifting the state up--------------------
const handleState=()=>{
    setshowIndex();
    setclick();
    //setshowItems(!showItems)
}
  return (
    <div className=" p-2  w-6/12 shadow-md mx-auto my-[24px] bg-gray-100 hover:bg-gray-200" >
        {/*Accordian Header*/}
        <div  className="flex  justify-between " onClick={handleState} >
      <h1 className="font-bold ">{Category.title} ({Category.itemCards.length})</h1>
      <span>🔽</span>
      </div>
      {/*Accordian Body*/}
      {showItems && <ItemLists items={Category?.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory
