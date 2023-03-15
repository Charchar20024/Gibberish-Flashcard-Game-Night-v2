import './AnswerForm.css'
import { useState } from 'react'

function AnswerForm(props) {
    const [guess, setGuess] = useState('')

    const handleGuess = (event) =>{
        const newGuess = event.target.value
        props.setGuess(newGuess)
    }

    const handleSubmit = (e) => { 
        if(props.guess==props.cardAnswer){
            props.setAnswer('correct-input')
            
         }else{
            props.setAnswer('incorrect-input')
         }
        e.preventDefault();
      }
    return (
       <form onSubmit={handleSubmit}>
        <label>Guess Here: </label> 
          <input
            className={props.answer}
            type="text"
            name="email"
            value={props.guess}
            onChange={handleGuess}
           />
        <input className='submit-btn' type="submit" value="Enter" />
       </form>
    )
}

export default AnswerForm