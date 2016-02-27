class Card extends React.Component {
  render() {
    return <div className="card">
      <h2> { this.props.title } </h2>
      <h6> { this.props.date } </h6>
      <img height="300px" width="300px" src={ this.props.imageUrl } />
    </div>
  }
}

Card.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
}

export default Card