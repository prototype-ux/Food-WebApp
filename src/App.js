
import Header from "./Components/Header";
import About from "./Components/About";
import Body from "./Components/Body";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense, useEffect, useState ,useContext} from "react";
import LoggedinUserContext from "./utils/LoggedinUserContext";     //react context
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";


const Grocery =lazy(()=>import("./Components/Grocery"))
const AppLayout = () => {
  const {loggedInUser}=useContext(LoggedinUserContext)
  console.log(loggedInUser)
  const [userName,setuserName]=useState("Default User");
  //authentication
  useEffect(()=>{
    //api to fetch username
    const data={
      name:"Mansi Kesarwani"
    }
setuserName(data.name)
  },[])
  

  return (
    
    <Provider store={appStore}> 
    <div className="app">
      
    {/*LoggedinUserContext loggedInUser value will be "Default value"*/}
     <LoggedinUserContext.Provider value={{loggedInUser:userName, setuserName}}>
      {/*LoggedinUserContext userdata value will be userName data(Mansi Kesarwani)*/}
    
      <Header />
     {/*<LoggedinUserContext.Provider value={{loggedInUser:"Elon Musk"}}>*/}
        {/*LoggedinUserContext loggedInUser value will be hardcoded passed data(Elon Musk)*/}
      <Outlet />
      {/*</LoggedinUserContext.Provider>*/}
     
    
    </LoggedinUserContext.Provider>
    </div>
    </Provider>
  );
};
const routerData = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resID",
        
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

function App() {
        
  return (
  <>
  
  <RouterProvider router={routerData} />
  </>);
}

export default App;
