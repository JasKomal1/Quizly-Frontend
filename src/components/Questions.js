import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function Questions({points, setPoints, setUserInfo, userInfo}) {
    // const [userInfo, setUserInfo] = useState(null)
    console.log(userInfo)
    const [quizTitle, setQuizTitle] = useState('')
    const [questions, setQuestions] = useState([])
    const [choices, setChoices] = useState([])
    const params = useParams()
    const [score, setScore] = useState(0)
    const [answers, setAnswers] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:3000/quizzes/${params['id']}`)
        .then ((r) => r.json())
        .then (quiz => {
            setQuizTitle(quiz.name)
            setQuestions(quiz.questions)
            setAnswers(quiz.questions.map((question,index) => {return {[index]: question.answer}}))
            })

        fetch(`http://localhost:3000/users/1`)
        .then ((r) => r.json())
        .then (setUserInfo)
        
            
    },[])

    const userQuizToPatch = userInfo && userInfo.user_quiz_info.find(quiz => quiz.name === quizTitle)

    
    function handleClick(){
        history.push(`/home`)
   }
    
    function addChoice(e){
        let newChoices = {...choices, [e.target.id]: e.target.value}
        setChoices(() => newChoices)
    }


    function handleSubmit(){
        let points = 0
        for(let key in choices){
            if(answers.some(obj => JSON.stringify(obj) === JSON.stringify({[key]:choices[key]}))) {
                setScore(score => score += 1)
                points++
            }
        }
        
        fetch(!!userQuizToPatch ? `http://localhost:3000/userquizzes/${userQuizToPatch.id}` : `http://localhost:3000/userquizzes`, {
            method: !!userQuizToPatch ? 'PATCH' : 'POST',
            headers: {'Content-Type': 'application/json', 
            'Accept': 'application/json'
        },
            
            body: JSON.stringify(!!userQuizToPatch ? {points: points} : {user_id: userInfo.id, quiz_id: params['id'], points: points})
        })
            .then(r => r.json())
            .then(scores => console.log(scores, 'hello'))        
        
         history.push("/home")
         window.location.reload()
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
        </div>
    )
}

export default Questions
