import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (heroId) => axios.get('http://localhost:4000/superheroes')
// const fetchFriends = () => axios.get('http://localhost:4000/friends')
function DynamicParallelQueriesPage({ heroIds }) {
     const queryResults = useQueries(heroIds.map(id => {
          return {
               queryKey: ['super-hero', id],
               queryFn: () => fetchSuperHero(id)
          }
     }))
     console.log(queryResults);

     // const { data: friends } = useQuery('friends', fetchFriends)
     return (
          <div>
               <h2>Parallel Queries</h2>
               {/* {superHeroes?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
               })}
               <hr />
               {friends?.data.map(friend => {
                    return <div key={friend.id}>{friend.name}</div>
               })} */}
          </div>
     )
}

export default DynamicParallelQueriesPage