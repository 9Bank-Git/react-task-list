import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

export default function PageLayout() {
  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    <ToastContainer autoClose={3500} hideProgressBar/>
    </>
  )
}
