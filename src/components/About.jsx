import { FaPython } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import { PiMicrosoftExcelLogoThin } from "react-icons/pi";
import { SiCanva } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import "..//styles/About.css"

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>
              Saya adalah mahasiswa Informatika di Universitas Satya Terra Bhinneka.
              Saat ini saya masih dalam proses belajar dan belum memiliki keahlian khusus di bidang IT.
              Namun, saya memiliki beberapa pengalaman yang ingin saya dokumentasikan, seperti sertifikat PKL, 
              hasil Uji Kompetensi Keahlian (UKK), dan juga karya kerajinan tangan yang pernah saya buat.
             Portofolio ini saya susun sebagai bentuk perjalanan dan usaha saya untuk terus berkembang, 
             khususnya menuju dunia teknologi.</p>

             <h4>Pengenalan Programming & Software Dasar</h4>
             <div className="skills">
                <FaPython />< FaFileWord /><PiMicrosoftExcelLogoThin /><SiCanva /><FaHtml5 /><FaCss3Alt />

             </div>
        </div>
    </section>
  )
}

export default About