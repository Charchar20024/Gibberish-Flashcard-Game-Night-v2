import './App.css'
import { useState } from 'react'

import Card from '../Card/Card'
import Logo from '../Logo/Logo'
import { cardInfo } from '../Card/Card'

const App = () => {
  const [numCard, setNumCard] = useState(1);
  const [level, setLevel] = useState(cardInfo.easy);
  const [cardColor, setCardColor] = useState('card-easy')
  const [cardContent, setCardContent] = useState(level[1].front)
  const [cardAnswer, setCardAnswer] = useState(level[1].back)
  const [answer, setAnswer] = useState('input')
  const [guess, setGuess] = useState('')
 

  const levelEasy = () => { 
    setLevel(cardInfo.easy);
    setNumCard(1)
    setCardContent(cardInfo.easy[1].front)
    setCardColor('card-easy')
  }
  const levelMed = () => { 
    setLevel(cardInfo.medium);
    setNumCard(1)
    setCardContent(cardInfo.medium[1].front)
    setCardColor('card-med')
    
  }
  const levelHard = () => { 
    setLevel(cardInfo.hard);
    setNumCard(1)
    setCardContent(cardInfo.hard[1].front)
    setCardColor('card-hard')
  }


  return (
      <div className='App'>
        <div className='levels'>
          <button className='easy-btn' onClick={levelEasy}>Easy</button>
          <button className='med-btn' onClick={levelMed}>Medium</button>
          <button className='hard-btn' onClick={levelHard}>Hard</button>
        </div>
        <Logo/>
        <Card
          level={level}
          setLevel={setLevel}
          numCard={numCard}
          setNumCard={setNumCard}
          cardContent={cardContent}
          setCardContent={setCardContent}
          cardColor={cardColor}
          cardAnswer={cardAnswer}
          setCardAnswer={setCardAnswer}
          answer={answer}
          setAnswer={setAnswer}
          guess={guess}
          setGuess={setGuess}
        />
        
      </div>
    )
}

export default App
