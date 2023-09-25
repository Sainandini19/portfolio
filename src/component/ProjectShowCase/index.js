import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details
  return (
    <li className="app-li">
      <img src={imageUrl} className="pic" alt={name} />
      <p className="para">{name}</p>
    </li>
  )
}

export default ProjectShowCase