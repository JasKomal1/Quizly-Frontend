import React, { useState } from 'react'

function Favorites({deleteFave, quiz,faves}) {
    const {id} = quiz

    const faveElements = faves.map((ele) => {
        return <div>{ele.quiz.name}</div>
    })


    function handleDelete() {
        fetch(`http://localhost:3000/favorites/${id}`,{
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then(() => {
            deleteFave(id);
        })
    }

    return (
        <div>
            <h3>favorites</h3>
            
                {faveElements} 
            
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default Favorites
