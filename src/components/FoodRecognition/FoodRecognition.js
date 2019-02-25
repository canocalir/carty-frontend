import React from 'react';

const FoodRecognition = ( {imageUrl} ) => {
    return (
        <div className='mt2 mb2'>
        <img alt='ingredients' src={imageUrl} width='500px' height='auto' />
        </div>
    )
}

export default FoodRecognition;