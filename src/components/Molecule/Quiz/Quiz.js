import React,{useState} from "react"
import styles from './Quiz.module.css'


export function Quiz(){

   var questions=[
    {
        Question:"What is your name?",
        Answers:[
            
                {Answer:"nitin",isCorrect:false},
                {Answer:"Ram",isCorrect:true},
                {Answer:"mahesh",isCorrect:false},
                {Answer:"yogesh",isCorrect:false}  
            ]
    },
    {
        Question:"What is your village name?",
        Answers:[
            
                {Answer:"satara",isCorrect:false},
                {Answer:"latur",isCorrect:false},
                {Answer:"paithan",isCorrect:true},
                {Answer:"jalna",isCorrect:false}  
            ]
    },
    {
        Question:"What is your your age?",
        Answers:[
                {Answer:"30",isCorrect:false},
                {Answer:"25",isCorrect:false},
                {Answer:"22",isCorrect:false},
                {Answer:"23",isCorrect:true}  
            ]
    }
   ]
   const[currentQue,setCurrentQue]=useState(0)
   const[score,setScore]=useState(0)
   const[showScore,setShowScore]=useState(false)

   const handleAnswer=(iscorrect)=>{
    if(iscorrect){
        setScore(score+1)
    }

    const nextQuestion=currentQue+1
    if(nextQuestion<questions.length){
        setCurrentQue(nextQuestion)
    }else{
        setShowScore(true)
    }

   }
  
    function handleReset(){
        
            setCurrentQue(0)
            setScore(0)
            setShowScore(false)
        
    }

   return (

    <>
        <div className={styles.container}>

           <div className={styles.child}>

           {showScore ? (
                <div>
                    You have scored {score} out of {questions.length}<br/>
                    <button className={styles.btn} onClick={handleReset}>Play Again</button>
                </div>
            ) : (
                <>
                        <div className={styles.questionNum}>
                            <span>{currentQue+1}</span>/{questions.length}
                        </div>

                        <div className={styles.questionText}>
                             {questions[currentQue].Question}
                        </div>
                   

                    <div className={styles.options}>
                        {questions[currentQue].Answers.map((answer)=>(
                            <button className={styles.btn} onClick={() =>handleAnswer(answer.isCorrect)}> { answer.Answer} </button>
                        ))}
                    </div>
                </>
            )
            }

           </div>

        </div>

    </>
)
}
