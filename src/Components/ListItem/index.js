import './index.css'

const ListItem = props => {
  const {details} = props
  const {Input, Length} = details

  return (
    <li className="item">
      <p className="count">
        {Input}: {Length}
      </p>
    </li>
  )
}

export default ListItem
