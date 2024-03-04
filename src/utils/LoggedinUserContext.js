import { createContext } from "react"

const LoggedinUserContext=createContext({
    loggedInUser:"Default User"
})
export default LoggedinUserContext;