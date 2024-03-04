//rafce---boiler plate for component


const Contact = () => {
  //resList=[]
  return (
    <div className="text-center">
      <h1 className="font-bold m-8 text-4xl">Contact us from here!!</h1>
      <form>
        <input type="text" placeholder="Name" className="border border-black p-2 m-2"></input>
        <input type="text" placeholder="Message" className="border border-black p-2 m-2"></input>
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">Submit</button>
        
      </form>
    </div>
  )
}

export default Contact
