import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout  = ()=>{
    return(
      <div>
        <Navbar/>
        <div style={{display: "flex"}}>
        <LeftBar/>
        <Outlet/>
        <RightBar/>
        </div>
      </div>
    )
      
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
        }
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (

    
    <div >
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
