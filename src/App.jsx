
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Works from './components/Works/Works';
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
  ]);

  return <RouterProvider router={router} />
}

export default App
