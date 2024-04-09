import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/propertyListPage/listPage";
import {Layout,RequireAuth} from "./routes/protectedRoute/layout";
import SinglePage from "./routes/singlePage/singlePage";
import AdminDashboard from "./routes/admin/AdminDashboard";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import LoginAdmin from "./routes/loginadmin/LoginAdmin";
import RegisterAdmin from "./routes/registeradmin/RegisterAdmin";
import { singlePropertyPageLoader ,listOfPropertyLoader} from "./utils/loaddata";
import DeleteProperty from "./routes/admin/crud/DeleteProperty";
import UpdateProperty from "./routes/admin/crud/UpdateProperty";
import CreateNewProperty from "./routes/admin/crud/CreateNewProperty";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>,
          loader:listOfPropertyLoader
        },
        {
          path:"/:id",
          element:<SinglePage/>,
          loader:singlePropertyPageLoader,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/admin/login",
          element:<LoginAdmin/>
        },
        {
          path:"/admin/register",
          element:<RegisterAdmin/>
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path:"/admindashboard",
          element:<AdminDashboard/>,
        },
        {
          path:"/admin/create",
          element:<CreateNewProperty/>
        },
        {
          path:"/admin/delete/:id",
          element:<DeleteProperty/>
        },
        {
          path:"/admin/update/:id",
          element:<UpdateProperty/>,
          loader:singlePropertyPageLoader
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
