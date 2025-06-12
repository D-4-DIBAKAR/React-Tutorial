import { useSuperHerosData } from './hooks/useSuperHerosData';

export function RQSuperHeroesPage() {
     const onSuccess = (data) => {
          console.log('perform side effect after data fetching', data);
     }
     const onError = (error) => {
          console.log('perform side effect after encountering error', error);
     }
     // const { isLoading, error, data, isError, isFetching } = useQuery('super-heroes', fetchSuperHeroes)
     const { isLoading, error, data, isError, isFetching, refetch } = useSuperHerosData(onSuccess, onError)
     // console.log(isLoading, isFetching);

     if (isLoading || isFetching) {
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
               {/* <button onClick={refetch}>Fetch Heroes</button> */}
               {/* {data?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
               })} */}
               {data?.map(heroName => {
                    return <div key={heroName}>{heroName}</div>
               })}
          </div>
     )
}

