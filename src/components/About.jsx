import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import "..//styles/About.css"

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>
              Saya adalah mahasiswa Informatika di Universitas Satya Terra Bhinneka. Saat ini saya masih dalam proses belajar dan belum memiliki keahlian khusus di bidang IT.
Portofolio ini saya susun sebagai bentuk perjalanan dan usaha saya untuk terus berkembang, khususnya menuju dunia teknologi..</p>

             <h4>Pengenalan Programming & Software Dasar</h4>
             <div className="skills">
                <FaPython /><FaHtml5 /><FaCss3Alt /><FaFigma />
                <IoLogoJavascript /><FaJava /><SiXampp />

             </div>
        </div>
    </section>
  )
}

export default About