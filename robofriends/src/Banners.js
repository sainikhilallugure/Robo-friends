import React from 'react'
import Banner from './Banner';

const Banners = ({robots}) =>{
    const bannersreturn = robots.map((a,i)=>{
        return(
            <div>
                <Banner name={robots[i].name} email={robots[i].email} id={robots[i].id} />
                
            </div>
        );

  });
    return(
        <div>
            {bannersreturn}
            
        </div>
    );
}
export default Banners;