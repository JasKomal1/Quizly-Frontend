import React from 'react'
import Quiz from './Quiz'

function Quizlist({quiz}) {

    const quizzes = quiz.map((quizz) => {
        return <Quiz key={quizz.id} name={quizz.name} category={quizz.category}/>
    })

    return (
        <div>
            {quizzes}
        </div>
    )
}

export default Quizlist
 
