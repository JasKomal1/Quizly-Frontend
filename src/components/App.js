import React, {useState, useEffect} from 'react'
import CategoryList from './Quizlist'
import User from './User'
import Scores from './Scores'
import Questions from './Questions'

function App () {
    const [quiz, setQuiz] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then ((r) => r.json())
        .then ( quizList=> {
            setQuiz(quizList)

            })
    },[])

    return (
        <div>
            <User/>
            <Scores/>
            <Quizlist quiz={quiz}/>
        </div>
    )
}

export default App
