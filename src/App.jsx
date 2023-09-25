import { useState } from 'react'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
