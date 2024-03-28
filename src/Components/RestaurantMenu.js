import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu=()=>{
    const [showIndex,setshowIndex]=useState(null);
    const [click,setclick]=useState(false)
    const {resID}=useParams();
    //console.log("resid",resID)
    const resInfo=useRestaurantMenu(resID);
    console.log("resInfo",resInfo);
    // const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((r)=>
    //     r?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
    //     //|| r?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" 
    // )
    const categories=resInfo?.cards
    //console.log("categories",categories)
    //console.log(useState);
    if(resInfo===null) return <Shimmer/>
    //const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {name,cuisines,costForTwoMessage}=resInfo?.info;
    //const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //const {itemInfo}=resInfo?.cards[4];
    //console.log("name",name)
    return (
     <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
       <p className="font-bold mb-8">{cuisines.join(", ")}-{costForTwoMessage}</p>
        {categories.map((category,index)=> 
        <RestaurantCategory key={category?.card?.card?.title} Category={category?.card?.card} 
        showItems={(index===showIndex && click)?true:false}
        setshowIndex={()=>setshowIndex(index)}
        setclick={()=>setclick(!click)}/>)
        }
        
        
     </div>

    )
}
export default RestaurantMenu;