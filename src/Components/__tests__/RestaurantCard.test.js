import { render ,screen} from "@testing-library/react"
import RestrauntCard ,{ RestrauntCardFast} from "../RestrauntCard"

import MOCK_DATA from "../mocksfortest/restaurantCardmock.json"

it("Should render restaurant card with props data",()=>{
    render(<RestrauntCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Shah Ghouse Hotel & Restaurant")
    expect(name).toBeInTheDocument();

})

//higher order component testing
it("Should render restaurant card with promoted label",()=>{
    const RestaurantCardFastcomponent=RestrauntCardFast(RestrauntCard)
    render(<RestaurantCardFastcomponent  resData={MOCK_DATA} />)
    const label=screen.getByText("Fast Delivery")
    expect(label).toBeInTheDocument();

})