import MOCK_DATA from "../mocksfortest/allRestaurantMockdata.json"
import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
//mock of fetch function
// global.fetch=jest.fn(()=>{
//     return Promise.resolve(
//         {
//         json: ()=>{return Promise.resolve(MOCK_DATA)}
    
//     })
//     })
const mockFetchUserData = (MOCK_DATA) => {
    return global.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        json: () => MOCK_DATA
      })
    )
  }
  
  it('should search res card for pizza search input', async () => {
  // Data can be empty array or array of data  
  await mockFetchUserData(MOCK_DATA)
  
    await act(async () =>
      render(
        <BrowserRouter><Body/></BrowserRouter>

      )
    )
    const searchbtn=screen.getByRole('button',{name:'Search'})
    expect(searchbtn).toBeInTheDocument();
    const cardbefore = screen.getAllByTestId('resCard');
    expect(cardbefore.length).toBe(20);
    const searchinput=screen.getByTestId('searchinput')
    expect(searchinput).toBeInTheDocument();
    //--------------------fire event is not working here----------------------------------
    fireEvent.change(searchinput,{target:{value:'Pizza'}})
    await waitFor(() => {
        expect(searchinput.value).toBe('Pizza');
      });
    fireEvent.click(searchbtn);
    await waitFor(() => {
        const cardafter = screen.getAllByTestId('resCard');
        expect(cardafter.length).toBe(1);
      });
    
    
})
    /*const searchbtn=screen.getByRole('button',{name:'Search'})
    expect(searchbtn).toBeInTheDocument();
    const searchinput=screen.getByTestId('searchinput')
    expect(searchinput).toBeInTheDocument();
    fireEvent.change(searchinput,{target:{value:'Pizza'}})

    await waitFor(() => {
        expect(searchinput.value).toBe('Pizza');
      });
      
      // Simulate clicking the search button
      fireEvent.click(searchbtn);
      
      // Wait for the results to appear asynchronously
      await waitFor(() => {
        const card = screen.getAllByTestId('resCard');
        expect(card.length).toBe(1);
      });

   
    // console.log(searchinput)
    // fireEvent.click(searchbtn);
    // const card=screen.getAllByTestId('resCard')
    // expect(card.length).toBe(1);
  }
  )*/
