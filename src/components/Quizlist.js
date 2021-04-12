import React,{useState, useEffect} from 'react'
import Quiz from './Quiz'

function Quizlist({setFaves,faves}) {
    const [quizzes, setQuizzes] = useState([]) 

    useEffect(() => {
        fetch("http://localhost:3000/quizzes")
        .then ((r) => r.json())
        .then (quizList => {
            setQuizzes(quizList)

            })
    },[])

    const display = quizzes.map((quizz) => {
        return <Quiz key={quizz.id} quiz={quizz} setFaves={setFaves} faves={faves}/>
    })



    return (
        <div>
            {display}
        </div>
    )
}

export default Quizlist
 
