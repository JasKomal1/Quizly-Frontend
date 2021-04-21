import React, { useState } from 'react'

function Favorites({deleteFave, quiz,faves}) {
    
   

    const faveElements = faves.map((ele) => {
        return <div>{ele.quiz.name} <button className='btnf' onClick={() => handleDelete(ele.id)}> 🗑 </button> </div>
    })


    function handleDelete(id) {
        fetch(`http://localhost:3000/favorites/${id}`,{
            method: 'DELETE',
        })
            deleteFave(id);
        
        
    }

    return (
        <div className='faves'>
            <h3>Favorites</h3>
            
                {faveElements} 
          
        </div>
    )
}

export default Favorites
