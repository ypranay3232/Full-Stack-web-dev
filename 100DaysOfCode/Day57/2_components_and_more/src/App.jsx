import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import NextSteps from './components/NextSteps/NextSteps.jsx'
import PropsConceptSection from './components/PropsConcept/PropsConceptSection.jsx'
import TabButton from './components/PropsConcept/Tabs_component.jsx'
import { EXAMPLES } from './data.js' // We import the data object to display based on topic

function App() {
  const [count, setCount] = useState(0)

  // 1. We create a piece of state to keep track of which tab is currently selected.
  // We initialize it to 'components' so the first tab is open by default.
  // Alternatively, we could start with nothing selected by initializing to null/empty string: useState() or useState('')
  const [selectedTopic, setSelectedTopic] = useState('components')

  // Passing function as values to props
  function HandleClick(selectedButton) {
    // 2. Here we receive the parameter (like 'components', 'jsx', etc) and update our state
    setSelectedTopic(selectedButton)
    console.log("Tab Selected: ", selectedButton)
  }

  return (
    <>
      <Hero count={count} setCount={setCount} />

      <div className="ticks"></div>

      <NextSteps />

      <PropsConceptSection />

      <div className="ticks"></div>
      <section id="spacer"></section>
      
      {/* lets build a tabs section  */}
      <section id="Tabs">
        <menu>
          {/* because we need to repeat the same feature we can create a component : Tabs_component.jsx */}
          
          {/* We ensure TabButton triggers HandleClick via the 'onSelect' prop.
              Notice we use an arrow function: () => HandleClick("components")
              If we wrote onSelect={HandleClick("components")}, it would run immediately when the component renders! 
              By passing () => HandleClick("..."), we ensure it only runs when clicked. */}
          <TabButton 
            isSelected={selectedTopic === 'components'} 
            onSelect={() => HandleClick('components')}
          >
             Components
          </TabButton>
          
          <TabButton 
            isSelected={selectedTopic === 'jsx'} 
            onSelect={() => HandleClick('jsx')}
          >
            JSX
          </TabButton>
          
          <TabButton 
            isSelected={selectedTopic === 'props'} 
            onSelect={() => HandleClick('props')}
          >
            Props
          </TabButton>
          
          <TabButton 
            isSelected={selectedTopic === 'state'} 
            onSelect={() => HandleClick('state')}
          >
            State
          </TabButton>
        </menu>

        {/* 3. CONDITIONAL RENDERING: 
            If selectedTopic is empty (e.g. if we set it to null initially), we can show a prompt. 
            For our example, we initialized it to 'components'. 
            We use the selectedTopic string ('components', 'jsx', etc.) as a key to look up data in our EXAMPLES object. */}
        
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
        
      </section>
    </>
  )
}

export default App
