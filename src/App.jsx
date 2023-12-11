
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Works from './components/Works/Works';
import ContactMe from './components/ContactMe/ContactMe';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/resume",
      element: <Resume/>,
    },
    {
      path: "/works",
      element: <Works/>,
    },
    {
      path: "/contact",
      element: <ContactMe/>,
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
