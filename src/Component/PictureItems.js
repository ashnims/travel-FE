import React from 'react'
import { Link } from 'react-router-dom'

const PictureItems = (props) => {
    return (
        <>
        <li className="pic-item">
            <Link to={props.path} className='pic-link' ><img src={props.src} alt="pic3" />
          <div> <p>{props.text}</p>
              </div> </Link>
            
        </li>
        
        </>
    )
}

export default PictureItems
