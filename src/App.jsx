import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
