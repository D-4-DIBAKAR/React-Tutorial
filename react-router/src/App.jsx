// import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import NewProducts from './components/NewProducts'
import FeaturedProducts from './components/FeaturedProducts'
import Users from './components/Users'
import Admin from './components/Admin'
import Profile from './components/Profile'
import RequireAuth from './components/RequireAuth'
import Login from './components/Login'
import UserDetails from './components/UserDetails'
import { AuthProvider } from './components/Auth'
function App() {
  // import About from './components/About'
  const LazyAbout = React.lazy(() => import('./components/About'))

  return (
    <>
      <AuthProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <React.Suspense fallback={'Loading...'}>
              <LazyAbout />
            </React.Suspense>
          } />
          {/* /about or about treated as same */}
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/products' element={<Products />} >
            {/* Nested Routes */}
            {/* This index route means default page should be displayed , This uses index prop instead of path */}
            <Route index element={<FeaturedProducts />} />

            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          {/* No Match Routes */}
          <Route path='*' element={<NoMatch />} />
          {/* Protected Routes */}
          <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='/login' element={<Login />} />
          {/* Dynamic Routes */}
          <Route path='users' element={<Users />} >

            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route>

        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
