import Head from 'next/head'
import Navbar from '../components/Navbar'
import EmblaCarousel from '../components/EmblaCarousel'


export default function Home() {
  return (
    <div className="container">
      <Navbar page="Home"></Navbar>
      <div className="carousel">
        <EmblaCarousel slides={[1,2,3,4,5]} className="slides"/>
        <span className="title">Loren Ipsum</span>
        <button className="button">Book an Appoinment</button>
        <ul className="socials">
          <a>f</a>
          <a>t</a>
          <a>i</a>
          <a>p</a>
        </ul>
      
      </div>
    </div>
  )
}
