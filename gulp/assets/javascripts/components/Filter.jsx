class Filter extends React.Component {
  render() {
    return (
      <li className={this.props.isSelected ? 'selected' : '' }>
        <a>{this.props.name}</a>
      </li>
    )
  }
}

Filter.propTypes = {
  name: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired
}

export default Filter