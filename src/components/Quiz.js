import React, {useState} from 'react'
import Questions from './Questions'
import {useHistory} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function Quiz({ quiz, setFaves,faves}) {
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
        <div className="quiz-box" >
            <h3>{quiz.category}</h3>
            <br/>
            <button onClick={handleClick}> {quiz.name} </button> {' '}
            <button className='btnd' onClick={onButtonClick}> ❤️ </button>
        </div>
    )
}

export default Quiz
