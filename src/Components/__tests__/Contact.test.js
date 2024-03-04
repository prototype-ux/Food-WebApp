import { render ,screen} from "@testing-library/react"
import Contact from "../Contact";
describe("Group of Contact up page testcases",()=>{
    beforeAll(()=>{
        console.log("It runs before starting the execution of all the test cases");
    })
    beforeEach(()=>{
        console.log("It runs before the execution of each test case");
    })
    afterAll(()=>{
        console.log("It runs after the execution of all the test cases");
    })
    afterEach(()=>{
        console.log("It runs after the execution of each test case");
    })




test("This will test contact us component",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("This will test button inside contact us component",()=>{
    render(<Contact/>);
    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("Should find input using placeholder",()=>{
    render(<Contact/>);
    const placeholder=screen.getByPlaceholderText("Name");
    expect(placeholder).toBeInTheDocument();
})

test("Should have 2 input boxes",()=>{
    //rendering
    render(<Contact/>);

    //querying
    const inputboxes=screen.getAllByRole("textbox");

    
    console.log(inputboxes); //returns JSX element (react elememnt/react fibre node ---an vdom object)
    //asserting
    expect(inputboxes.length).not.toBe(1);
})


})