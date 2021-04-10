import React, { useState } from 'react'

function Favorites({deleteFave, quiz}) {
    const [faveo, setFaveo] = useState([])
    const {id} = quiz

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
            faves
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default Favorites
