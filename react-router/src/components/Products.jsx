import { Link, Outlet } from 'react-router-dom'

function Products() {
     return (
          <>
               <div>
                    <input type="search" placeholder='Search ...' />
               </div>
               <nav>
                    {/* Relative Paths */}
                    <Link to='featured'>Featured</Link>
                    <Link to='new'>New</Link>
                    {/* Absolute Paths */}
                    {/* <Link to='/products/featured'>Featured</Link>
                    <Link to='/products/new'>New</Link> */}
               </nav>
               <Outlet />
          </>
     )
}

export default Products