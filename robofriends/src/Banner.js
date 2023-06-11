import React from 'react'

const Banner = ({name,email,id}) =>{
    return(<div className='bg-light-green dib pd3 ma3'>
        <div className='dib'> 
        <img src={`https://robohash.org/${id}`}alt="img" />
        
            <h1>{name}</h1>
            <p>{email}</p>
            </div>
         </div>);
}
export default Banner;