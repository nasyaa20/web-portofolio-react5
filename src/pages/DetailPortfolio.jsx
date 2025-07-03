import { useParams,Navigate } from "react-router-dom"
import '../styles/DetailPortfolio.css'
import { portfoliolist } from "../data/DataPortfolio"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

function DetailPortfolio() {
  const {id } = useParams();
  const data = portfoliolist.find((item)=>item.id === id)
  if(data == undefined){
    return <Navigate to='pages-not-found'/>
  }
  
  console.log(data)
  return (
    <>
        <Navbar />
      
    <section id="detail-portfolio">
      <div className="wrapper">
          <h1>{data.title}</h1>
        <img src={data.image} />
        <p className="ket"><b>Keterangan:</b>{data.keterangan}</p>
      </div>
    </section>
  <Footer />
  <ScrollToTop />
        </>
  )
}

export default DetailPortfolio