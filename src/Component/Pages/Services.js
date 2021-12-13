import React from 'react'
import { FaInstagramSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Services = () => {
    return (
        <section>
            <h1 className='service-title'>Services</h1>
            <div className="content">
                <h3>Customised Holidays</h3>
                <p>Consider us your travel consultant, not just your travel planner. We really understand the holiday you are dreaming of and we bring it to life. If it is a shopping, sight-seeing, beach, adventure, culinary or any other kind of holiday you are looking for, get in touch. </p>
           <h3>Escorted Group Trips</h3>
           <p>We periodically customize a trip for a small group of 7-9 people to experience as a group, a festival or event happening around the world. Follow our social media pages for the next epic trip.</p>
            </div>
            <div className="service-btn">
                <button className='visit-btn'>visite our travel blog</button>
            </div>
<div className="insta">
    <h1 className='large-letter'>Follow us on Instagram</h1>
<Link to='/' className='insta-link'>Instagram <FaInstagramSquare  className='logo-in'/> </Link>

</div>
        </section>
    )
}

export default Services
