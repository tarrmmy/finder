import React from 'react'
import './Course.css'
function Course() {
    return (
        <div className='body'>
           <div>
               <h1 className='head'>Take the assessment and find out if your home could be<br/>adapted to help you stay safe.</h1>
           </div>
            <button className='button'>START NOW</button>
              <h4>How it works</h4>
              <h6 className='text'>The assessment asks about how you get into your house and garden. There are also questions about how you use the stairs and your<br/>bathroom.</h6>
              <h6 className='text'>At the end, your home will be given a score to show how suitable it is for you and suggest ways you could make it better. You can also check if<br/>you are eligible to apply for a Disabled Facilities Grant (DFG) from your local council to help towards the work.</h6>
            <button className='button'>START NOW</button>
            <h5 className='text1'>A grant may also be available for other conditions and impairments such as a learning<br/>disability or visual impairment. Please contact your local council for more information.</h5>
           
        </div>
    )
}

export default Course;
