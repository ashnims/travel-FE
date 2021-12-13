import React from 'react'
import { Link } from 'react-router-dom'
import {FaInstagramSquare} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {FiTwitter} from 'react-icons/fi';



const Footer = () => {
    return (
        <section>
<div className="partner">
    <h2>connet with us</h2>
   <Link to='/' className='p-link'><BsFacebook  className='logo-fut'/></Link> 
   <Link to='/'  className='p-link'><FiTwitter className='logo-fut'/></Link> 
   <Link to='/'  className='p-link'>    <FaInstagramSquare className='logo-fut'/></Link> 
    </div> 

        </section>
    )
}

export default Footer
