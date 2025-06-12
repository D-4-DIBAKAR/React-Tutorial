import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
const fetchFriends = () => axios.get('http://localhost:4000/friends')
function ParallelQueriespage() {
     const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
     const { data: friends } = useQuery('friends', fetchFriends)
     return (
          <div>
               <h2>Parallel Queries</h2>
               {superHeroes?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
               })}
               <hr />
               {friends?.data.map(friend => {
                    return <div key={friend.id}>{friend.name}</div>
               })}
          </div>
     )
}

export default ParallelQueriespage