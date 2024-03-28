import { useState, useEffect } from "react";
import menu from "./mockdataMenu";

import { MENU_API } from "../utils/constants";
//debugger;
export const useRestaurantMenu=(resID)=>{
    const [resInfo, setresInfo]=useState(null);

    useEffect(()=>{fetchMenu();},[]);
    
    //console.log("resid",resID)
    const fetchMenu=async ()=>
    {
        //const data= await fetch(MENU_API+resID);
        //const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=20366&catalog_qa=undefined&submitAction=ENTER");
        //const json= await data.json();
        //console.log("menu fetched",json);
        //setresInfo(json.data);
        setresInfo(menu);
        

    }
    return resInfo;
}
