import './App.css';
import React, {useState, useEffect} from 'react'
import User from './components/User'
import Scores from './components/Scores'
import Quizlist from './components/Quizlist'
import Favorites from './components/Favorites'


function App() {
    const [quiz, setQuiz] = useState([])
    const [faves, setFaves] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/quizzes")
        .then ((r) => r.json())
        .then (quizList => {
            setQuiz(quizList)

            })
    },[])

    useEffect(() => {
      fetch("http://localhost:3000/favorites")
      .then ((r) => r.json())
      .then (favorites => {
          setFaves(favorites)

          })
  },[])


    function handleDeleteFave(id) {
        const newArr = faves.filter(fave => fave.id !== id)
        setFaves(newArr)
    }

  return (
    <div className="App">
      <User/>
      <Scores/>
      <Quizlist quiz={quiz} faves={faves} setFaves={setFaves}/>
      <Favorites faves={faves} deleteFave={handleDeleteFave} quiz={quiz}/>
   
    </div>
  );
}

export default App;






  


