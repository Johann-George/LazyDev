import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import LandingPage from "./pages/LandingPage.jsx"
import { RouterProvider } from 'react-router-dom'
import ErrorPage from "./pages/ErrorPage.jsx"

const routeDefinitions = createRoutesFromElements(
  <Route path='/' element={<App/>} errorElement={<ErrorPage/>}>
    <Route index element={<LandingPage/>}/>
  </Route>
)

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer
      position='top-center'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
      theme='light'
      transition={Bounce}
    />
  </StrictMode>,
)
