import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../Pages/HomePage/HomePage";
import StartBookingfrom from "../Pages/HomePage/StartBookingfrom";
import LoginPage from "../Pages/LoginRegistrationPage/LoginPage";
import SignInLayout from "../Pages/LoginRegistrationPage/SignInLayout";
import SignUpLayout from "../Pages/LoginRegistrationPage/SignUpLayout";

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
            
        },
        {
            path:"/login",
            element:<LoginPage/>,
            children:[
                {
                    path:"/login",
                    element: <SignInLayout/>
                },
                {
                    path:"/login/registration",
                    element:<SignUpLayout/>
                }
            ]
        }
]);

export default route;