import React, { useEffect } from 'react'
import { BsCoin } from 'react-icons/bs'

function Loader({setIsLoading}) {

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        
        return () => clearTimeout(timeout);
      }, []);

  return (
    <div className='loader-container'>
      <h1 data-aos="fade-up" data-aos-duration="900">grana.app</h1>
        <p data-aos="fade-up" data-aos-duration="1300">economizar nunca foi tão fácil! </p>    
        <BsCoin className='loader'/>
    </div>
  )
}

export default Loader
