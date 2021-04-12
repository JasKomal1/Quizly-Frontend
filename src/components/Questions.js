import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function Questions({quizId}) {
    const [questions, setQuestions] = useState([])
    const [choices, setChoices] = useState([])
    const params = useParams()
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/quizzes/${params.id}`)
        .then ((r) => r.json())
        .then (quiz => {
            setQuestions(quiz.questions)
            setAnswers(quiz.questions.map((question,index) => {return {[index]: question.answer}}))
            })
    },[])

    function handleClick(){
        history.push(`/home`)
   }
    
    function addChoice(e){
        let newChoices = {...choices, [e.target.id]: e.target.value}
        setChoices(() => newChoices)
    }

    function handleSubmit(){
        // console.log(answers)
        // console.log(choices)
        fetch(`http://localhost:3000/userquizzes/${quizId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'points': score, user_id: 1, quiz_id: quizId})
        })
            .then(r => r.json())
            .then(scores => setScore(scores.points)) 

        for(let key in choices){
            if(answers.some(obj => JSON.stringify(obj) === JSON.stringify({[key]:choices[key]}))) {
                setScore(score => score + 1)
            }
        
        // console.log({[key]:choices[key]})
        }

    }

    const displayQuestions = questions.map((question,index) => {
        return (
            <li> 
                <h3>{question.title}</h3>
                <select onChange={addChoice} id={index}>
                
                     <option id='choice1' value={question.choice1}>{question.choice1}</option>
                   
                     <option id='choice2' value={question.choice2}>{question.choice2}</option>
                    
                     <option id='choice3' value={question.choice3}>{question.choice3}</option>

                </select>
                
            </li>
        )
    })

    return (
        <div>
            <p>{score}</p>
            <ul>
                {displayQuestions}
            </ul>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClick}>Home</button>
        </div>
    )
}

export default Questions
