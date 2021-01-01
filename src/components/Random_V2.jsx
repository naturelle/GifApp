import React from 'react'
import useGif from './useGif'

const Tag = ()=> {
  
    const [gif, fetchGif] = useGif()

    const handleClick = ()=> {
        fetchGif(tag)
    }

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif"/>
            <button onClick={fetchGif}>New gif</button>
        </div>
    )
}

export default Tag
