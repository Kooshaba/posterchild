class Card extends React.Component {
  render() {
    return <div>
      <h2> { this.props.title } </h2>
      <h6> { this.props.date } </h6>
      <img src={ this.props.imageUrl } />
    </div>
  }
}

Card.propTypes = {
  imageUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  date: React.PropTypes.string
}

export default Card