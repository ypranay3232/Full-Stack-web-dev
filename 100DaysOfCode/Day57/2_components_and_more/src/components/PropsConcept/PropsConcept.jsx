import heroImg from '../../assets/hero.png'

export default function PropsConcept({ title = "heading 1", Description = "The core concept of props ", img = heroImg }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{Description}</p>
    </li>
  )
}
