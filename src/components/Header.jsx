import potoProfil from "../assest/profil.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsappSquare } from "react-icons/fa";
import "../styles/Header.css"
function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={potoProfil} />
            <h3>SONA SYAHDULYA</h3>
            <p>MAHASISWA</p>
            <div className="socialMedia">
                <a 
                href="https://www.instagram.com/sonasyhdlya_20?igsh=MTJyYmptYWNjbXZ2eg=="
                target="_blank"
                rel="nooper noreferrer"
                >
                  <FaInstagram />
                  </a>

                <a href="https://www.tiktok.com/@cewekribet_?_t=ZS-8xiwO0cbcPq&_r=1"
                target="_blank"
                rel="nooper noreferrer"
                ><FaTiktok />
                </a>

                <a href="mailto:syahdulyasona@gmail.com"
                target="_blank"
                rel="nooper noreferrer"
                >
                  <TfiEmail />
                  </a>

                <a href="https://wa.me/6285361702335"
                target="_blank"
                rel="nooper noreferrer"
                >
                  <FaWhatsappSquare />
                  </a>
            </div>
        </div>
    </header>
  )
}

export default Header