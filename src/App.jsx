import { useState, useEffect } from 'react';

import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'

const defaultResponse = {
	good: 0,
	neutral: 0,
	bad: 0
}

function App() {  
  const [currentResponse, setResponse] = useState(() => 
    JSON.parse(localStorage.getItem('response')) || defaultResponse
  )
  const totalFeedback = currentResponse.good + currentResponse.neutral + currentResponse.bad;  
   
  const updateFeedback = feedbackType => {    
       setResponse({
      ...currentResponse,
      [feedbackType]: currentResponse[feedbackType] + 1      
    })  
  } 
  
  const resetFeedback = () => {
    setResponse(defaultResponse)
  }

 useEffect (() => {
   localStorage.setItem('response', JSON.stringify(currentResponse))
 }, [currentResponse])
  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
      {totalFeedback >0 ? <Feedback good={currentResponse.good} neutral={currentResponse.neutral} bad={currentResponse.bad} total={totalFeedback} postivity={Math.round((currentResponse.good / totalFeedback)*100)}/>:<Notification/>}
    </>
  )
}

export default App