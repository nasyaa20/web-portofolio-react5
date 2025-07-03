import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function PagesNotFound() {
  return (
   <>
        <Navbar />
   <div className='wrapper'>
     <h3>Ooopss...</h3>
    <   p>Halamana yang anda tuju tidak Ditemukan...</p>
   </div>
    <Footer />
   
    </>
  )
}

export default PagesNotFound