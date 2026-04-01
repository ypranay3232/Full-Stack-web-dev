import PropsConcept from './PropsConcept'
import './PropsConceptSection.css'
import heroImg from '../../assets/hero.png'

export default function PropsConceptSection() {
  return (
    <section id="Props_concept">
      <h2>Props_concept</h2>
      <ul>
        <PropsConcept />
        {/* i want to pass different values with each time i use this component so we can do it with props */}
        <PropsConcept 
          title="Custom Heading" 
          Description="We can pass custom values using props."
          img={heroImg}
        />
        <PropsConcept />
      </ul>
    </section>
  )
}
