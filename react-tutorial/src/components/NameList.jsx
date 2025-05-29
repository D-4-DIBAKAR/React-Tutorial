import React from 'react'
import Person from './Person'

function NameList() {
     // const names = ['Bruce', 'Clark', 'Diana']
     // const nameList = names.map((name, index) => <h2 key={index}>{++index}: {name}</h2>)
     const persons = [
          {
               id: 1,
               name: 'Bruce',
               age: 30,
               skill: 'React'
          },
          {
               id: 2,
               name: 'Clark',
               age: 25,
               skill: 'Angular'
          },
          {
               id: 3,
               name: 'Diana',
               age: 28,
               skill: 'Vue'
          }
     ]
     const personsList = persons.map(person => <Person key={person.id} person={person} />)
     // const nameList = [
     //      <h2 key='1'>Bruce</h2>,
     //      <h2 key='2'>Clark</h2>,
     //      <h2 key='3'>Diana</h2>
     // ]

     return (
          <div>
               <h2>Name List</h2>
               <hr />
               {/* {
                    names.map((name, index) => <h2 key={index}>{++index}: {name}</h2>)
               } */}
               {personsList}
          </div>
     )
}

export default NameList