import { useEffect, useState ,useContext} from "react";
import {APP_LOGO ,CART_LOGO} from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import LoggedinUserContext from "../utils/LoggedinUserContext";
import { useSelector } from "react-redux";


const Header=()=>{
        //console.log("Header rendered");
        const [logbtn,setlogbtn]=useState("Login");
        const {loggedInUser}=useContext(LoggedinUserContext)
        //console.log(loggedInUser)
        useEffect(()=>{//console.log("use effect called")
return ()=>{
       // console.log("use effect unmounted")
}},[logbtn]);
const cartItems=useSelector((store)=>store.cart.items)
//console.log(cartItems)
const onlineStatus=useOnlineStatus();
    return(
            
            < div className='flex  md:justify-between items-center'>
                    <div className='logo-container'>
                            <img className="logo w-24 ml-4 md:w-28 rounded-[100px] m-2 md:ml-6" src={APP_LOGO} alt="company logo"/>

                    </div>
                    <div >
                            <ul className="flex items-center p-4 m-4 text-sm md:text-xl">
                                    <li  className="px-4 md:block hidden">Online Status: {onlineStatus===true?"❣":"💔"}</li>
                                    <li className="px-4 "><Link to="/">Home</Link></li>
                                    <li className="px-4 whitespace-nowrap"><Link to="/about" >About Us</Link></li>
                                    <li className="px-4 whitespace-nowrap"><Link to="/contact">Contact Us</Link></li>
                                    <li className="px-4 md:block hidden"><Link to="/grocery">Grocery</Link></li>
                                   {/*} <li className="px-4"> <button className="btn" onClick={()=>{
                                     logbtn==="Login"?setlogbtn("Logout"):setlogbtn("Login");
                                      console.log(logbtn);
                    }
                                           }>{logbtn}
                    
                                        </button></li>*/}
                                 <li className="px-4 font-bold  md:block hidden">{loggedInUser}</li>

                           

                    
                    
                    
                                 
                         <li  className="px-4  ">  
                         <Link to="/Cart">
                         <img className="w-[30px] md:w-[50px]" src={CART_LOGO} alt="cart logo"/></Link></li>
                         <li className="font-bold">{cartItems.length}</li>
                         
                            </ul>
                    </div>
            </div>
    )
}
export default Header;