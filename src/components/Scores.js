import React, {useEffect, useState} from 'react'

function Scores({deleteScore, setUserQuiz, userInfo, userQuiz, setUserInfo}) {
    // const [userInfo, setUserInfo] = useState(null)


    

    useEffect(() => {
        fetch("http://localhost:3000/users/1")
        .then((r) => r.json())
        .then((v) => {
            
            setUserInfo(v)
            setUserQuiz(v.user_quiz_info)
        
        })
    }, [])


    function delScore(id) {
       
        deleteScore(id)
        
    }

    
    return (
        <div className='score'>
            <br/>
            <h3>Scores</h3> 
            <ul>
                {userInfo && userQuiz.map(quiz => <li key={quiz.id}>{`${quiz.name}: ${quiz.points} points`} {' '} <button className='btn' onClick={() => delScore(quiz.id)}> 🗑 </button></li>)}
            </ul>
        </div>
    )
}

export default Scores
