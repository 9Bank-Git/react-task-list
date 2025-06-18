import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'

export default function PageLayout() {
  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    <ToastContainer autoClose={2500} hideProgressBar/>
    </>
  )
}