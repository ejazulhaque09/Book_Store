import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx'
import Error from "./Components/Error.jsx";
import BookList from './Components/BookList.jsx';
import BookDetails from './Components/BookDetails.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <BookList/>
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/book/:id',
        element: <BookDetails/>
      }
      
    ],
    errorElement: <Error/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)


