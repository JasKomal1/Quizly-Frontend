import './App.css';
import React, {useState, useEffect} from 'react'
import User from './components/User'
import Scores from './components/Scores'
import Quizlist from './components/Quizlist'
import Favorites from './components/Favorites'
import {Switch,Route} from 'react-router-dom'
import Questions from './components/Questions'


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [quiz, setQuiz] = useState([])
    const [faves, setFaves] = useState([])
    const [points, setPoints] = useState(null)
    const [userQuiz, setUserQuiz] = useState([])

    useEffect(() => {

      fetch("http://localhost:3000/favorites")
      .then ((r) => r.json())
      .then (favorites => {
          setFaves(favorites)
       })

       fetch("http://localhost:3000/quizzes")
          .then ((r) => r.json())
          .then (quizzes => {
          setQuiz(quizzes)
    })
  },[])


    function handleDeleteFave(id) {
        const newArr = faves.filter(fave => fave.id !== id)
        setFaves(newArr)
    }

    
    function handleDeleteUq(uq) {
      fetch(`http://localhost:3000/userquizzes/${uq}`,{
        method: 'DELETE',
    })
      const newQz = userQuiz.filter(quz => quz.id !== uq)
      setQuiz(newQz)
    }

  return (
    <div className="App">
      <Switch >
        <Route path='/home'>
      <User/>
      <Quizlist faves={faves} setFaves={setFaves}/>
      <Favorites faves={faves} deleteFave={handleDeleteFave} quiz={quiz}/>
      <Scores deleteScore={handleDeleteUq}/>
      </Route>
      <Route path='/quiz/:id'>
        <Questions points={points} setPoints={setPoints}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;






  


