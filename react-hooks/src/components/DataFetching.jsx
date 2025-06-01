import React, { useEffect, useState } from 'react'

function DataFetching() {
     const [post, setPost] = useState({});
     const [id, setId] = useState(1);
     const [idFromButtonClick, setIdFromButtonClick] = useState(1);

     useEffect(() => {
          fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
               .then(res => res.json())
               .then(data => setPost(data))
               .catch(err => console.log(err))
     }, [idFromButtonClick])
     const handleClick = () => {
          setIdFromButtonClick(id + 1)
     }
     return (
          <div>
               <h1>Data Fetching</h1>
               <input type="text" value={id} onChange={e => setId(e.target.value)} />
               <button onClick={handleClick}>Fetch Post</button>
               <div>{post.title}</div>
               {/* <ul>
                    {
                         posts.map(post => <li key={post.id}>{post.title}</li>)
                    }
               </ul> */}
          </div>
     )
}

export default DataFetching