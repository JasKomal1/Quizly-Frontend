import React, { useState } from 'react'

function Favorites({deleteFave, quiz,faves}) {
    
   

    const faveElements = faves.map((ele) => {
        return <div>{ele.quiz.name} <button onClick={() => handleDelete(ele.id)}>Delete</button> </div>
    })


    function handleDelete(id) {
        fetch(`http://localhost:3000/favorites/${id}`,{
            method: 'DELETE',
        })
            deleteFave(id);
        
        console.log(id)
    }

    return (
        <div>
            <h3>Favorites</h3>
            
                {faveElements} 
            
        </div>
    )
}

export default Favorites
