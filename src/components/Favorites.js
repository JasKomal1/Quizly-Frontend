import React, { useState } from 'react'

function Favorites({deleteFave, quiz,faves}) {
    const {id} = quiz

    const faveElements = faves.map((ele) => {
        return <li>{ele.quiz.name}</li>
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
            <ul> 
                {faveElements} 
            </ul>
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default Favorites
