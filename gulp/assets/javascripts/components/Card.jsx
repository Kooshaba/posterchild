class Card extends React.Component {
  render() {
    return (
      <div className="large-4 medium-6 columns">
        <div className="card">
          <div className="image">
            <img className="model-image" src={this.props.imageUrl} />
          </div>
          <div className="metadata">
            <span className="model-name">{this.props.title}</span>
            <span className="model-agency">Chadwick</span>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}

export default Card