import { BrowserRouter } from "react-router-dom"
import { fireEvent, render,screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA_MENU from "../mocksfortest/resitemslistmock.json"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"

global.fetch=jest.fn(()=>
Promise.resolve({
json: ()=> Promise.resolve(MOCK_DATA_MENU)}
))

it("should load restaurant menu",async()=>
{
await act(()=>{
    render(<BrowserRouter><Provider store={appStore}><Header/>
    <RestaurantMenu/><Cart/></Provider></BrowserRouter>)
})
const accordianheader=screen.getByText("Recommended (20)");
fireEvent.click(accordianheader)
expect(screen.getAllByTestId("fooditem").length).toBe(20);
const addbtns=screen.getAllByRole("button",{name:'Add+'});
console.log(addbtns.length)
fireEvent.click(addbtns[0])
expect(screen.getByText("1")).toBeInTheDocument()
fireEvent.click(addbtns[1])
expect(screen.getByText("2")).toBeInTheDocument()

})