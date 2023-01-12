import React from "react";
import imagePath from "./constants/imagePath";
import index from '../src/index'
import LaunchingPage from './pages/launchingPage/launchingPage'
import HomePage from "./pages/HomePage/HomePage";
import Test from "./pages/HomePage/test"

export default function App()

{
  return(
    <div>
      <HomePage/>
      {/* <Test/> */}
    </div>
  )
}