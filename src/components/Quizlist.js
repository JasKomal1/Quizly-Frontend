import React from 'react'
import Quiz from './Quiz'

function Quizlist({quiz, setFaves}) {

    const quizzes = quiz.map((quizz) => {
        return <Quiz id={quizz.id} key={quizz.id} name={quizz.name} category={quizz.category} questions={quizz.questions} setFaves={setFaves}/>
    })

    return (
        <div>
            {quizzes}
        </div>
    )
}

export default Quizlist
 
