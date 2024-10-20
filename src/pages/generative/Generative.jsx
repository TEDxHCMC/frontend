import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Base64 } from 'js-base64';

const Generative = () => {
    const { posterUrl } = useSelector((state) => state.poster)
    const [poster, setPoster] = useState("")

    useEffect(() => {
        console.log("Url: ",posterUrl)
        const poster = Base64.atob(posterUrl)
        setPoster(poster)
    }, [posterUrl])
    
    return (
        <section className='flex justify-center items-center'>
            <img src={poster} className='block w-1/2 h-1/2 object-cover'></img>
        </section>
        
    )
}

export default Generative