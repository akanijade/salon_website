import Navbar from '../components/Navbar'
import contactStyle from '../styles/contact_us.module.css'

export default function ContactUs() {
	const currentPage = (page) => {
		if (page === props.page) {
			return navStyles.current
		} else {
			return "not_current"
		}
	} 
	return (
		<div className={contactStyle.container}>
			<Navbar page="Contact Us"></Navbar>
			<style jsx global>{`
				body{
					margin: 0px;
					padding: 0px;
				}
			`}</style>
			<div className={contactStyle.title}>
				<h1 className={contactStyle.h1}>Contact</h1>
				<p className={contactStyle.p}>
					I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
				</p>
			</div>
			<div className={contactStyle.center_cards}>
				<div className={contactStyle.info}>
					<div className={contactStyle.contact}>
						<div className={contactStyle.center_info}>

							<h2 className={contactStyle.h2}>Phone:</h2>
							<p>123-456-7890</p>
							<h2 className={contactStyle.h2}>Email:</h2>
							<p>info@mysite.com</p>
						</div>
					</div>
					<div className={contactStyle.hours}>
						<div className={contactStyle.center_info}>

							
							<h2>Opening hours:</h2>
							<p>
								Monday 10am-7pm <br/>
								Monday 10am-7pm <br/>
								Monday 10am-7pm <br/>
								Monday 10am-7pm <br/>
								Monday 10am-7pm <br/>
							</p>
						</div>
					</div>
					<div className={contactStyle.address}>
						<div className={contactStyle.center_info}>

							<h2>Address:</h2>
							<p>
								500 Terry Francois Street <br/>
								San Francisco, CA 94158
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={contactStyle.form_container}>
				<form id="messageForm" className={contactStyle.form}>
					<div className={contactStyle.name}>
						<label className={contactStyle.label} htmlFor="firstName">
							First Name
							<input className={contactStyle.input} type="text" name="firstName"/>
						</label>
						<label className={contactStyle.label} htmlFor="lastName">
							Last Name
							<input className={contactStyle.input} type="text" name="lastName"/>
						</label>
					</div>
					<div className={contactStyle.contact}>
						<label className={contactStyle.label} htmlFor="email">
							Email
							<input className={contactStyle.input} type="email" name="email"/>
						</label>
						<label className={contactStyle.label} htmlFor="phone">
							Phone
							<input className={contactStyle.input} type="tel" name="phone"/>
						</label>
					</div>
					<div className={contactStyle.message}>
						<label className={contactStyle.label} htmlFor="message">
							Leave us a message...
							<textarea className={contactStyle.textarea} name="message" cols="50" rows="7"></textarea>
						</label>
					</div>
					<div className={contactStyle.center_submit}>
						<button className={contactStyle.button} type="submit">Submit</button>
					</div>
				</form>
			</div>
			<div className={contactStyle.map}>
				<iframe className={contactStyle.iframe}
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.131517491791!2d-121.91485368441239!3d37.528396934068645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc7f004a76efb%3A0x5458eb0afb4a3262!2sKulsoom%20Point!5e0!3m2!1sen!2sus!4v1625808295148!5m2!1sen!2sus"
					allowFullScreen="" loading="lazy">
				</iframe>
			</div>
			<footer className={contactStyle.footer}>
				<div className={contactStyle.logo}>JS Parlour</div>
				<div className={contactStyle.contact}>
					<p>
						500 Terry Francois Street<br/>
						San Francisco, CA 94158
					</p>
					<p>
						123-456-7890
					</p>
					<p>
						info@mysite.com
					</p>
				</div>
				<div className={contactStyle.navigation}>
					<div className={contactStyle.pages}>
						<a className={contactStyle.a} href="/">Home</a>
						<a className={contactStyle.a} href="/book_an_appointment">Book An Appointment</a>
						<a className={contactStyle.a} href="/services">Services</a>
						<a className={contactStyle.a} href="/contact" id="contact">Contact</a>
						<a className={contactStyle.a} href="/videos">Videos</a>
					</div>
					<div className={contactStyle.socials}>
						<a className={contactStyle.a} href="#">
							<img className={contactStyle.img} src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png"/>
						</a>
						<a className={contactStyle.a} href="#">
							<img className={contactStyle.img} src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png"/>
						</a>
						<a className={contactStyle.a} href="#">
							<img className={contactStyle.img} src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png"/>
						</a>
						<a className={contactStyle.a} href="#">
							<img className={contactStyle.img} src="https://static.wixstatic.com/media/9c486556465843c5850fabfd68dfae49.png"/>
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}