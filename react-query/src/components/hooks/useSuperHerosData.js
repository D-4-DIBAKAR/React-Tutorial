import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
export const useSuperHerosData = (onSuccess, onError) => {
     return useQuery('super-heroes', fetchSuperHeroes, {
          // cacheTime: 5000,
          // staleTime: 30000, //default is 0,
          // refetchOnMount: false,//default is true, or another value can be passed 'always',
          // refetchOnReconnect: false,//default is true, or another value can be passed 'always',
          // refetchOnWindowFocus: false, //default is true, or another value can be passed 'always',
          // refetchInterval: 1000,//default is false, or another value can be passed in miliseconds, //it stops fetching data when window is not in focus
          // refetchIntervalInBackground: false, //default is false, or another value can be passed in miliseconds //it continue fetching data when window is not in focus,
          // enabled: false //default is true used for disable the query on mount , now we can use button to trigger the query
          onSuccess,
          onError,
          select: (data) => {
               console.log('perform side effect after data fetching', data);
               const superHeroNames = data.data.map(hero => hero.name)
               return superHeroNames
               // return data.data
          }
     })
}
