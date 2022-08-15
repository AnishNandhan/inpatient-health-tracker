import React from 'react'

const Form = () => {
  return (
    <>
      <h1>Update Patient Details</h1>
      <form className='update-form'>

        <div>
          <label>Name: </label>
          <input type='text' required/>
        </div>

        <div>
          <label>Age: </label>
          <input type='number' required/>
        </div>

        <div className='gender'>
          <label>Gender: </label>
          <div>
            <label for='male'>Male</label>
            <input type='radio' id='male' name='gender' value='male' required/>
          </div>
          <input type='radio' name='gender' value='female' required/>
          <input type='radio' name='gender' value='other' required/>
        </div>

        <div>
          <label>Date of procedure: </label>
          <input type='date' required/>
        </div>

        <div>
          <label>Expected discharge date: </label>
          <input type='date' required/>
        </div>

        <div>
          <label>ICD code of Illness: </label>
          <input type='text' required/>
        </div>

        <div>
          <label>Description of Illness: </label>
          <input type='text' required/>
        </div>

        <div>
          <label>Procedure: </label>
          <input type='text' required/>
        </div>

        <div>
          <label>Complains of patient </label>
          <input type='text' required/>
        </div>

        <div>
          <label>Pulse: </label>
          <input type='number' required/>
        </div>

        <div>
          <label>BP: </label>
          <input type='number' required/>
        </div>

        <div>
          <label>RR: </label>
          <input type='number' required/>
        </div>

        <div>
          <label>TPR: </label>
          <input type='number' required/>
        </div>

        <div>
          <label>spO2: </label>
          <input type='number' required/>
        </div>

        <div>
          <label>Intake (in ml): </label>
          <input type='number' required/>
        </div>

        <div>
          <label>Output (in ml): </label>
          <input type='number' required/>
        </div>

        <div>
          <label>Drain (in ml): </label>
          <input type='number' required/>
        </div>

        <div>
          <label>Doctor's orders: </label>
          <textarea></textarea>
        </div>
 
        <button>Save Changes</button>
      </form>
    </>
  )
}

export default Form