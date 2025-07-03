import potoProfil from "../assest/profil.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
                <a href="c:\Users\ibraa\OneDrive\Documents\assests\profil.jpg"><FaInstagram /></a>
                <a href=""><FaTiktok /></a>
                <a href=""><FaGithub /></a>
                <a href=""><FaWhatsappSquare /></a>
            </div>
        </div>
    </header>
  )
}

export default Header