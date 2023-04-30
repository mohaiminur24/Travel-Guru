import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

const route = createBrowserRouter([
        {
            path:"/",
            element: <App/>,
            children:[
                {
                    path:"/",
                    element: <h1>MohaiMinur</h1>
                }
            ]
            
        }
]);

export default route;