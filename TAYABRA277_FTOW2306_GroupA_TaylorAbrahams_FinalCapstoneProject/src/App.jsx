import './App.css'
import Navbar from './components/Navbar.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import SocialMediaLinks from './components/SocialMediaLinks.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Navigation />
      <SocialMediaLinks />
      <Footer />
    </>
  )
}

export default App
