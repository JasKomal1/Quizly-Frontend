import './App.css';
import React, {useState, useEffect} from 'react'
import User from './components/User'
import Scores from './components/Scores'
import Quizlist from './components/Quizlist'
import Favorites from './components/Favorites'
import {Switch,Route} from 'react-router-dom'
import Questions from './components/Questions'
import Card from 'react-bootstrap/Card'

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [quiz, setQuiz] = useState([])
    const [faves, setFaves] = useState([])
    const [points, setPoints] = useState(null)
    const [userQuiz, setUserQuiz] = useState([])
    const [users, setUsers] = useState([])
    const [userInfo, setUserInfo] = useState(null)

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

        fetch("http://localhost:3000/quizzes")
          .then ((r) => r.json())
          .then (players => {
            setUsers(players)
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
    console.log(userInfo)
      const newQz = userInfo.user_quiz_info.filter((quz) => quz.id !== uq)
      console.log(newQz)
      console.log(userQuiz)
      setUserQuiz(newQz)
    }

  return (
    <div className="App">
      <h1>Welcome to Quizly</h1>
      <Switch >
        <Route path='/home'>
      <User users={users}/>
      {/* <Quizlist faves={faves} setFaves={setFaves}/> */}
      <div className='faveScore'>
      <Favorites faves={faves} deleteFave={handleDeleteFave} quiz={quiz}/>
      <Scores deleteScore={handleDeleteUq} setUserQuiz={setUserQuiz} userInfo={userInfo} userQuiz={userQuiz} setUserInfo={setUserInfo}/>
      </div>
      <Quizlist faves={faves} setFaves={setFaves}/>
      </Route>
      <Route path='/quiz/:id'>
        <Questions points={points} setPoints={setPoints} userInfo={userInfo} setUserInfo={setUserInfo}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;





/* <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
  

 */
