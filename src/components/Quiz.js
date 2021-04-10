import React from 'react'

function Quiz({name, category,faves}) {

    


    return (
        <div>
            {category}
            <br/>
            <button onClick> {name} </button>
            <button onClick> Add to Faves </button>
        </div>
    )
}

export default Quiz
