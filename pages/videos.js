import Navbar from '../components/Navbar'
import contactStyle from '../styles/contact_us.module.css'

export default function Videos() {
    const currentPage = (page) => 
    {
        if (page === props.page) 
            {
			    return navStyles.current
            } 
        else 
            {
			    return "not_current"
		    }
    } 

return (
    <div className={contactStyle.container}>
        <Navbar page="Videos"></Navbar>
        <div className={contactStyle.title}>
            <h1 className={contactStyle.h1}>Videos</h1>
            <p className={contactStyle.p}>
                Here are some videos to give you an idea about what we do.
            </p>
        </div>
        
        <div className={contactStyle.image}>
				<iframe className={contactStyle.iframe}
					src="https://static.wixstatic.com/media/c837a6_437653b7f8dd44db89caa4bbd8f192cf~mv2.jpg/v1/fill/w_1960,h_1404,al_c,q_90,usm_0.66_1.00_0.01/c837a6_437653b7f8dd44db89caa4bbd8f192cf~mv2.webp"
					width="980" height="702" allowfullscreen="" loading="lazy">
				</iframe>

    </div>
)

}
