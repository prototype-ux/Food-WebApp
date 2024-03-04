import { useState } from "react"


const User = (props) => {
    const [count]=useState(0)
    const [count2]=useState(10)
  return (
    <div>
        <h1>Functional component</h1>

      <h2>Name: {props.name}</h2>
      <h2>Software Engineer</h2>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
    </div>
  )
}

export default User
