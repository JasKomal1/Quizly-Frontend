import React, {useState} from 'react'
import Questions from './Questions'
import {useHistory} from 'react-router-dom'

function Quiz({ quiz, setFaves,faves}) {
    // const [score, setScore] = useState(null)
   const history = useHistory()

    function onButtonClick(){
        fetch("http://localhost:3000/favorites", {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_id: 1, quiz_id: quiz.id})

        })
        .then((r) => r.json())
        .then(favorite => setFaves(() => [...faves, favorite]))
     }

    function handleClick(){
         history.push(`quiz/${quiz.id}`)
    }
    


    return (
        <div>
            <h3>{quiz.category}</h3>
            <br/>
            <button onClick={handleClick}> {quiz.name} </button>
            <button onClick={onButtonClick}> Add to Faves </button>
            {/* <Questions/> */}
        </div>
    )
}

export default Quiz
