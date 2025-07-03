import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaUniversity } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';




function Experience() {
  return (
    <>
        <Navbar />
        <div className='wrapper'>
            <h1>Experience</h1>
            <VerticalTimeline>

                  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Oktober-Desember 2022"
    iconStyle={{ background: '	#E9967A', color: '#fff' }}
    icon={ <FaUniversity />}
  >
    <h3 className="vertical-timeline-element-title">Intern – Biro WR II, Universitas Negeri Medan</h3>
    <h4 className="vertical-timeline-element-subtitle">Medan, Indonesia</h4>
    <p>
      Data Entry, Surat Menyurat, Administrasi Dasar, Pengelolaan Dokumen
      </p>

  </VerticalTimelineElement>
            </VerticalTimeline>
         
        </div>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default Experience