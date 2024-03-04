import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"

it("Should render header component with Login Button",()=>{
render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);//As header component has redux and router so we have to pass it here also
//const Loginbutton=screen.getByRole("button");
const Loginbutton=screen.getByRole("button",{name:"Login"}); //if there is multiple button but need to find specific button so we can add name
//const Loginbutton=screen.getByText("/Login/");---passing as regex
//const Loginbutton=screen.getByText("Login"); //alternate way but better way is to find using Role
expect(Loginbutton).toBeInTheDocument();


})

it("Should render header component with 0 cart items",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );//As header component has redux and router so we have to pass it here also
    
    const itemnumber=screen.getByText("0"); 
    
    expect(itemnumber).toBeInTheDocument();
    
    
    })

it("Should render header component has cart or not",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
            </Provider>
            </BrowserRouter>
        );//As header component has redux and router so we have to pass it here also
        
        const cart=screen.getByAltText("cart logo"); 
        
        expect(cart).toBeInTheDocument();
        
        
        })

it("Should change Login to logout when clicked",()=>{
            render(
                <BrowserRouter>
                <Provider store={appStore}>
                <Header/>
                </Provider>
                </BrowserRouter>
            );//As header component has redux and router so we have to pass it here also
            
            const Loginbutton=screen.getByRole("button",{name:"Login"});
            fireEvent.click(Loginbutton);
            const Logoutbutton=screen.getByRole("button",{name:"Logout"});
            
            expect(Logoutbutton).toBeInTheDocument();
            
            
            })