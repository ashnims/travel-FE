import React from 'react'
import {GiPhotoCamera} from 'react-icons/gi';

const Showbar = () => {
    return (
        <section className='showbar'>
            <video src="/video/video-1.mp4" autoPlay loop muted />
           {/* <div className="pose"> */}
            <h1>Travel India</h1>
            <p>What are you waiting for?</p>
            <div className="show-container">
               <button className='show-btn'>
                   Our Photos <GiPhotoCamera />
               </button>
               {/* <button className='show-btn'>Our Video <MdSlowMotionVideo /> </button> */}

            </div>
            {/* </div> */}
        </section>
    )
}

export default Showbar
