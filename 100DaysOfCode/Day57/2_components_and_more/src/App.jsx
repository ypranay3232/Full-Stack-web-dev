import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import NextSteps from './components/NextSteps/NextSteps.jsx'
import PropsConceptSection from './components/PropsConcept/PropsConceptSection.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero count={count} setCount={setCount} />

      <div className="ticks"></div>

      <NextSteps />

      <PropsConceptSection />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
