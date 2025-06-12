// import { useState } from 'react'
// import YoutubeForm from './components/YoutubeForm'
// import './App.css'
import './AppTwo.css'

import EnrollmentForm from './components/EnrollmentForm'
import FormikContainer from './components/FormikContainer'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
function App() {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <div className='App'>
        {/* <YoutubeForm/> */}
        {/* <FormikContainer /> */}
        {/* Forms with Formik */}
        <LoginForm />
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}

      </div>
    </ChakraProvider>
  )
}

export default App
