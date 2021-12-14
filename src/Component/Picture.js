import React from 'react'
import PictureItems from './PictureItems'

const Picture = () => {
    return (
        <main className='picture'>
            <div className="pic-container">
                <div className="pic-title">
                    <h1>Popular Destinations</h1>
                </div>
                <div className="pic-list-cont">
                    <ul className="pic-list">
                    <PictureItems 
                        src='/Photos/k1.jpg'
                        text='Kashmir'
              path='/packges' />
                       <PictureItems 
                        src='/Photos/Kerala.jpeg'
                        text='Kerala'
              path='/packges' /> 
              
                </ul>
                <ul className="pic-list">
                       <PictureItems 
                        src='/Photos/Nashik.jpg'
                        text='Nashik'
              path='/packges' /> 
                <PictureItems 
                        src='/Photos/k3.jpg'
                        text='Kasol'
              path='/packges' />
                {/* <PictureItems 
                        src='/Photos/shillong.jpg'
                        text='Shillong'
              path='/packges' /> */}
                    </ul>
                </div>
            </div>
            
        </main>
    )
}

export default Picture
