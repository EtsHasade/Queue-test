import { createHashRouter } from "react-router-dom";
import { App } from './App'
import PeopleIndex from "./pages/PeopleIndex";
export const router = createHashRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children: [
      {
        path: "/",
        element: <PeopleIndex />,
        errorElement: (
          <div className="errorPage">ERROR 404</div>
        ),

      },

    ]
  },

])