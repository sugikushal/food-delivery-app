const Contact = () => {
  return (
    <div className="my-16 mx-20 font-mono">
      <h2 className="text-lg font-semibold">Contact Us</h2>
      <input className="border-2 border-gray-500 rounded m-4 px-2 py-1" placeholder="name"></input>
      <input className="border-2 border-gray-500 rounded m-4 px-2 py-1" type="email" placeholder="email id"></input>
      <button className="m-4 border-2 border-gray-500 rounded-lg bg-white py-1 px-2 shadow-md hover:shadow-xl">Submit</button>
    </div>
  )
}

export default Contact;