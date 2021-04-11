import React, {useState} from 'react'

function Quiz({name, category,faves,questions, setFaves,id}) {
    const [quesOne, setQuesOne] = useState(null)
    const [quesTwo, setQuesTwo] = useState(null)
    const [quesThree, setQuestThree] = useState(null)

    const quest = questions.map((question) => {
        return <div> {question.title} <br/> {question.choice1} <br/> {question.choice2} <br/> {question.choice3}</div>
    })

    function onButtonClick(){
        fetch("http://localhost:3000/favorites", {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user_id: 1, quiz_id: id})

        })
        .then((r) => r.json())
        .then(favorite => setFaves(faves => [...faves, favorite]))
    }

    function handleShow(){

    }


    return (
        <div>
            {category}
            <br/>
            <button onClick={handleShow}> {name} </button>
            <button onClick={onButtonClick}> Add to Faves </button>
            <br/>
            <ul>
             <li>{quest}</li>
            </ul>
        </div>
    )
}

export default Quiz
