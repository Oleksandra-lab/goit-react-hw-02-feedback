import React from 'react'

import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics"


class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

render () {
  return (
    <div>
      <Section title="">
      {/* <FeedbackOptions> </FeedbackOptions> */}
      <Statistics 
        good={good}
         neutral={neutral}
         bad={bad}
         total={total}
         positivePercentage={positivePercentage}/>
         
      {/* <Notification message="There is no feedback"></Notification> */}
    </Section>
    </div>
    
  
    
  );
}
}




export default App;

