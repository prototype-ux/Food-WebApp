import { Component } from "react";
//import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(){
        super();
        console.log("parent constructor");
    }


    render(){
       
        
        return(
            
            <div className="m-12">
                
                
                
                <UserClass />
                
            </div>
        )
    }
}

export default About;