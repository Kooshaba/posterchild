import Filter from './Filter.jsx'

class FilterBox extends React.Component {
  renderFilters() {
    let filters = this.props.filters

    return filters.map((filter) => {
      return <Filter
        key={filter.name}
        name={filter.name}
        isSelected={filter.isSelected || filter.order !== 'none'}
        toggleFilter={this.props.toggleFilter}
      />
    })
  }

  render() {
    return <div className="large-4 large-pull-4 medium-6 small-6 columns filter">
      <ul className="">
        {this.renderFilters()}
      </ul>
    </div>
  }
}

FilterBox.propTypes = {
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  toggleFilter: React.PropTypes.func.isRequired
}

export default FilterBox