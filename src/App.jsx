import React from "react"
import Header from "./Components/Header"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <div className="absolute top-0 w-full z-40 text-white font-semibold"><Header>logo.png</Header></div>
      <div className="w-full min-h-[610px] h-screen relative bg-gray-600 bg-[url(https://images.pexels.com/photos/9468392/pexels-photo-9468392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-blend-multiply z-20">
        <div className="w-4/5 mx-auto py-24 text-white">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default App
