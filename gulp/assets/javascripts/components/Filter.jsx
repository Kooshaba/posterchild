class Filter extends React.Component {
  render() {
    return (
      <div>
        <a className={this.props.isSelected ? 'selected' : '' } href="">
          { this.props.name }
        </a>
      </div>
    )
  }
}

Filter.propTypes = {
  name: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired
}

export default Filter