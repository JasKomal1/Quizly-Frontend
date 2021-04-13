import React, {useState} from 'react'

function Scores({points}) {
    const [scores, setScores] = useState(0)
    const [quesOne, setQuesOne] = useState(null)
    

    
    return (
        <div>
            <br/>
            <h3>Scores</h3> 
            <div>{points ? points : null}</div>
        </div>
    )
}

export default Scores
