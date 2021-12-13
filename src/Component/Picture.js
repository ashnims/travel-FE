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
                        src='/Photos.js/img-2.jpg'
                        text='Kashmir'
              path='/packges' /> 
                <PictureItems 
                        src='/Photos.js/img-2.jpg'
                        text='Kashmir'
              path='/packges' />
                <PictureItems 
                        src='/Photos.js/img-2.jpg'
                        text='Kashmir'
              path='/packges' />
                    </ul>
                    <ul className="pic-list">
                       <PictureItems 
                        src='/Photos.js/img-2.jpg'
                        text='Kashmir'
              path='/packges' /> 
                <PictureItems 
                        src='/Photos.js/img-2.jpg'
                        text='Kashmir'
              path='/packges' />
                <PictureItems 
                        src='/Photos.js/img-2.jpg'
                        text='Kashmir'
              path='/packges' />
                    </ul>
                </div>
            </div>
            
        </main>
    )
}

export default Picture
