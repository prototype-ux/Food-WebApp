import React from "react";
import LoggedinUserContext from "../utils/LoggedinUserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child constructor"+this.props);
        this.state={
            name:"Dummy",
            company:"Dummy",
            avatar_url:"https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"

        };
       
    }

async componentDidMount(){
    this.timer=setInterval(()=>console.log("componentDidMount"),1000);
const data= await fetch("https://api.github.com/users/prototype-ux");
const jsondata= await data.json();
console.log(jsondata);
this.setState({
    name:jsondata.name,
    company:jsondata.company,
    avatar_url:jsondata.avatar_url

})

}
componentDidUpdate(){
        console.log("componentDidUpdate")}

componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.timer);
}



    

    render(){
        
        
        
        return (
            <div className="flex flex-wrap justify-center m-24 ">
                <img className="w-24 h-24 m-5 rounded-[100px]" src="https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg" alt="AvatarImage"/>
              
                <div className="m-8 ">
                <h2>Logged in user-
                    <LoggedinUserContext.Consumer>{({loggedInUser})=>(<h1 className="font-bold">{loggedInUser}</h1>)}
                    </LoggedinUserContext.Consumer>
                </h2>
                <h2>Company: {this.state.company}</h2>
                </div>
            </div>
          )
        }

}
export default UserClass;