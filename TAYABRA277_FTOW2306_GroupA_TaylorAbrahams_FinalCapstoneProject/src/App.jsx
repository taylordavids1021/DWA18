// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Filter from './Filter.jsx'
import Footer from './Footer.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    {/* Nav on top
  **
     * summary
     * youtube link
     * few music selections
     * what is my podcast
     * social media links/icons big
     * why choose my podcast
     * small navbar at the bottom
     * social media links/icons smal
     * footer
     * 
     * right filter 
     * search 
     * category
     * mood
     * genres
     * filter button 
     * reset filter button
     */ }
     
      <Navbar />
      <Filter />
      <h1>Testing</h1>
      <Footer />
    </>
  )
}

export default App
