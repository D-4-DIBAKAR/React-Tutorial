import React from 'react'
import useInput from '../hooks/useInput'

function UserForm() {

     // const [firstName, setFirstName] = useState('')
     const [firstName, bindFirstName, resetFirstName] = useInput('')
     const [lastName, bindLastName, resetLastName] = useInput('')
     const submitHandler = e => {
          e.preventDefault()
          alert(`Hello ${firstName} ${lastName}`)
          resetFirstName()
          resetLastName()
     }
     return (
          <div><form onSubmit={submitHandler}>
               <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"
                         {...bindFirstName} />
               </div>
               <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' name='lastName'
                         {...bindLastName} />
               </div>
               {/* <h2>Your first name is - {firstName}</h2>
               <h2>Your last name is - {lastName}</h2> */}
               {/* <h2>{JSON.stringify({ firstName, lastName })}</h2> */}
               <button type="submit">Submit</button>
          </form>
          </div>
     )
}

export default UserForm