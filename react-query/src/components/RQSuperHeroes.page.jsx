import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
export function RQSuperHeroesPage() {
     // const { isLoading, error, data, isError, isFetching } = useQuery('super-heroes', fetchSuperHeroes)
     const { isLoading, error, data, isError, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes, {
          // cacheTime: 5000,
          // staleTime: 30000, //default is 0,
          // refetchOnMount: false,//default is true, or another value can be passed 'always',
          // refetchOnReconnect: false,//default is true, or another value can be passed 'always',
          // refetchOnWindowFocus: false, //default is true, or another value can be passed 'always',
          // refetchInterval: 1000,//default is false, or another value can be passed in miliseconds, //it stops fetching data when window is not in focus
          // refetchIntervalInBackground: false, //default is false, or another value can be passed in miliseconds //it continue fetching data when window is not in focus,
          enabled: false //default is true used for disable the query on mount , now we can use button to trigger the query




     })
     console.log(isLoading, isFetching);

     if (isLoading) {
          return <h2>Loading...</h2>
     }
     //if you want loading text when data is fetching on button click use isFetching
     // if (isFetching) {
     //      return <h2>Fetching...</h2>
     // }
     if (isError) {
          return <h2>{error.message}</h2>
     }
     return (
          <div>
               <h2>RQ Super Heroes Page</h2>
               <button onClick={refetch}>Fetch Heroes</button>
               {data?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
               })}
          </div>
     )
}

