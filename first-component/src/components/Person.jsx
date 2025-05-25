import React from 'react'

function Person({ person }) {
     return (
          <div><h2>My name is {person.name}. I'm {person.age} years old. I'm know {person.skill}.</h2></div>
     )
}

export default Person