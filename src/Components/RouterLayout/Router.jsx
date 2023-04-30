import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../Pages/HomePage/HomePage";
import StartBookingfrom from "../Pages/HomePage/StartBookingfrom";

const route = createBrowserRouter([
        {
            path:"/",
            element: <App/>,
            children:[
                {
                    path:"/",
                    element: <HomePage/>,
                    loader:()=>fetch("http://localhost:5000/")
                },
                {
                    path:"/booking",
                    element:<StartBookingfrom/>
                }
            ]
            
        }
]);

export default route;