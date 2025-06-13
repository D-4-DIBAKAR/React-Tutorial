import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useAddSuperHeroData, useSuperHerosData } from './hooks/useSuperHerosData';

export function RQSuperHeroesPage() {
     const [name, setName] = useState('');
     const [alterEgo, setAlterEgo] = useState('');
     // const { mutate, isLoading, error, isError } = useAddSuperHeroData();
     const { mutate } = useAddSuperHeroData();
     const onSuccess = (data) => {
          console.log('perform side effect after data fetching', data);
     }
     const onError = (error) => {
          console.log('perform side effect after encountering error', error);
     }
     // const { isLoading, error, data, isError, isFetching } = useQuery('super-heroes', fetchSuperHeroes)
     const { isLoading, error, data, isError, isFetching, refetch } = useSuperHerosData(onSuccess, onError)
     // console.log(isLoading, isFetching);

     // if (isLoading) {
     //      return <h2>Loading...</h2>
     // }
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
     const handleAddHeroClick = () => {

          if (!name || !alterEgo) return
          console.log(name, alterEgo);
          const hero = { name, alterEgo };
          mutate(hero);



          // const hero = { name, alterEgo };
          // mutate(hero);
          // refetch();
     }
     return (
          <div>
               <h2>RQ Super Heroes Page</h2>
               <div>
                    <input type="text" placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder='alterEgo' value={alterEgo} onChange={e => setAlterEgo(e.target.value)} />
                    <button onClick={handleAddHeroClick}>Add Hero</button>
               </div>
               <button onClick={refetch}>Fetch Heroes</button>
               {/* {data?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
               })} */}
               {data?.data.map(hero => {
                    return <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>{hero.name}</Link>
               })}
               {/* {data?.map(heroName => {
                    return <div key={heroName}>{heroName}</div>
               })} */}
          </div>
     )
}

