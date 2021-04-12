import './App.css';
import React, {useState, useEffect} from 'react'
import User from './components/User'
import Scores from './components/Scores'
import Quizlist from './components/Quizlist'
import Favorites from './components/Favorites'
import {Switch,Route} from 'react-router-dom'
import Questions from './components/Questions'


function App() {
    const [quiz, setQuiz] = useState([])
    const [faves, setFaves] = useState([])

   

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
      <Switch >
        <Route path='/home'>
      <User/>
      <Scores/>
      <Quizlist faves={faves} setFaves={setFaves}/>
      <Favorites faves={faves} deleteFave={handleDeleteFave} quiz={quiz}/>
      </Route>
      <Route path='/quiz/:id'>
        <Questions />
        </Route>
      </Switch>
    </div>
  );
}

export default App;






  


