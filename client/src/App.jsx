
import { RouterProvider } from "react-router";
import { router } from "./Router/Routes/Routes";
import { ToastContainer } from 'react-toastify';

// import './App.css'



function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <ToastContainer></ToastContainer> */}
    </>
  )
}

export default App
