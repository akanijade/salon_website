import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div className="container">
            <Navbar page="Home"></Navbar>
            Book your apointment
        </div>
    )
}
