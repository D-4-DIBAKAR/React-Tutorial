import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
export function RQSuperHeroesPage() {
     const { isLoading, error, data, isError } = useQuery('super-heroes', fetchSuperHeroes)

     if (isLoading) {
          return <h2>Loading...</h2>
     }
     if (isError) {
          return <h2>{error.message}</h2>
     }
     return (
          <div>
               <h2>RQ Super Heroes Page</h2>
               {data?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
               })}
          </div>
     )
}

