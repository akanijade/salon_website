import Head from 'next/head'
import navStyles from '../styles/Navbar.module.css'

export default function Navbar(props) {
	const currentPage = (page) => {
		if (page === props.page) {
			return navStyles.current
		} else {
			return "not_current"
		}
	} 
	return (
		<div className={navStyles.container}>

			<Head>
				<title>{props.page + ' | JS Parlour'}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className={navStyles.nav}>
				<div className={navStyles.logo}>
					JS Parlor
				</div>
				<div className={navStyles.navigation}>
					<a href="/" className={navStyles.a} id={currentPage("Contact Us")}>Home</a>
					<a href="/book_an_appointment" className={navStyles.a} id={currentPage("Contact Us")}>Book An Appointment</a>
					<a href="/services" className={navStyles.a} id={currentPage("Contact Us")}>Services</a>
					<a href="/contact_us" className={navStyles.a} id={currentPage("Contact Us")}>Contact Us</a>
					<a href="/videos" className={navStyles.a} id={currentPage("Contact Us")}>Videos</a>
				</div>
				
			</nav>
		</div>
	)
}