class Filter extends React.Component {
  render() {
    return (
      <li className={`${this.props.isSelected ? 'selected' : ''}`}>
        <a onClick={() => this.props.toggleFilter(this.props.name)}>
          <span className={`tick ${this.props.isSelected ? '' : 'hidden'}`}></span>
          {this.props.name}
        </a>
      </li>
    )
  }
}

Filter.propTypes = {
  name: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  toggleFilter: React.PropTypes.func
}

export default Filter