import React from 'react';


const Rank = ({name, entries}) => {
    return (
        <div>
        <div className='f3 white'>
        {`${name}, you recognised ${entries} food images`}
        </div>
        </div>
    )
}

export default Rank;