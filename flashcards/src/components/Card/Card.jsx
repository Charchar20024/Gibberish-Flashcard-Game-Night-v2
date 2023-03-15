import './Card.css'
import ReactCardFlip from "react-card-flip";
import { useState } from 'react'

import NavButton from '../NavButton/NavButton'
import AnswerForm from '../AnswerForm/AnswerForm';

export const cardInfo = {
  easy: {
    1:{
        front: `fifed holler food lawn`,
        back: `5 dollar footlong`,
    },
    2:{
        front: `press hid hender ump`,
        back: `president trump`,
    },
    3:{
        front: `ellen mayo`,
        back: `LMAO`,
    },
    4:{
        front: `sure gore furry`,
        back: `sugar free`,
    },
    5:{
        front: `ab pole moose sick`,
        back: `apple music`,
    },
    6:{
        front: `hike ant eve hen`,
        back: `i cant even`,
    },
    7:{
        front: `van heap hack`,
        back: `fanny pack`,
    },
    8:{
        front: `vector hero yell`,
        back: `victory royale`,
    },
    9:{
        front: `fish hits bin hers`,
        back: `fidget spinners`,
    },
    10:{
        front: `tint hurt eight`,
        back: `tinder date`,
    }
  } ,
  medium: {
    1:{
        front: `gerr have it eef alls`,
        back: `gravity falls`,
    },
    2:{
        front: `hand boar gerr`,
        back: `hamburger`,
    },
    3:{
        front: `pole hair rowed calm era`,
        back: `Polaroid camera`,
    },
    4:{
        front: `bore third hay par tea`,
        back: `birthday party`,
    },
    5:{
        front: `sum oak ed sam own`,
        back: `smoked salmon`,
    },
    6:{
        front: `fear eeg hot mud her`,
        back: `fairy godmother`,
    },
    7:{
        front: `eel own mosque`,
        back: `Elon Musk`,
    },
    8:{
        front: `ghast haste own`,
        back: `gas station`,
    },
    9:{
        front: `hoe tell lob he`,
        back: `hotel lobby`,
    },
    10:{
        front: `catch sup ham us terd`,
        back: `ketchup and mustard`,
    },
  },
  hard: {
    1:{
        front: `plea center eruope as word`,
        back: `please enter your password`,
    },
    2:{
        front: `tiga tye grr eyes crane`,
        back: `tiger tiger ice cream`,
    },
    3:{
        front: `chalk oil let malks chake`,
        back: `chocolate milkshake`,
    },
    4:{
        front: `fresh van ill ack app ouch chin owe`,
        back: `French vanilla cappuccino`,
    },
    5:{
        front: `pun show bud nor eat earn`,
        back: `punch bug no return`,
    },
    6:{
        front: `pun kit spies lot tay`,
        back: `pumpkin spice latte`,
    },
    7:{
        front: `saw foot bowl dags`,
        back: `soft boiled eggs`,
    },
    8:{
        front: `hatch meows hide hobo dad`,
        back: `cash me ousside how bow dat`,
    },
    9:{
        front: `own wind stays weave hair ping`,
        back: `on wednesdays, we wear pink`,
    },
    10:{

        front: `Thatch hutches lied`,
        back: `The cha cha slide`,
    },
  },
}


const Card = (props) => {
  
  const [flip, setFlip] = useState(false);
  
  const cardClick = () => { 
    if(props.cardContent==props.level[props.numCard].front){
        setFlip(!flip)
        props.setCardContent(props.level[props.numCard].back);
        
 
    }else{
       setFlip(!flip)
       props.setCardContent(props.level[props.numCard].front);
        
    }
  
 }

  return (
    <div className='cards'>
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
            <div className={props.cardColor} onClick={cardClick}>
                <div className='card-info'>
                    <p className='card-num'>{props.numCard}/10</p>
                </div>
                <div className='card-content'>
                    <p className='content' >{props.cardContent}</p> 
                    {/* <AnswerForm/> */}
                </div>
            </div>
            
            <div className={props.cardColor} onClick={cardClick}>
                <div className='card-info'>
                    <p className='card-num'>{props.numCard}/10</p>
                </div>
                <div className='card-content'>
                    <p className='content' >{props.cardContent}</p> 
                </div>
            </div>
        </ReactCardFlip> 
        <AnswerForm
            cardAnswer={props.cardAnswer}
            answer={props.answer}
            setAnswer={props.setAnswer}
            guess={props.guess}
            setGuess={props.setGuess}
        />
        <NavButton 
            numCard={props.numCard}
            setNumCard={props.setNumCard}
            setCardContent={props.setCardContent}
            level={props.level}
            setAnswer={props.setAnswer}
            setCardAnswer={props.setCardAnswer}
            setGuess={props.setGuess}
        />
    </div>
  )
}

export default Card