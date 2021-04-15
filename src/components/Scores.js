import React, {useEffect, useState} from 'react'

function Scores({}) {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/users/1")
        .then((r) => r.json())
        .then(setUserInfo)
    }, [])

    
    return (
        <div>
            <br/>
            <h3>Scores</h3> 
            <ul>
                {userInfo && userInfo.user_quiz_info.map(quiz => <li key={quiz.id}>{`${quiz.name}: ${quiz.points} points`}</li>)}
            </ul>
        </div>
    )
}

export default Scores
