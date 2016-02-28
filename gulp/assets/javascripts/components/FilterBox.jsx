import Filter from './Filter.jsx'

class FilterBox extends React.Component {
  renderFilters() {
    let filters = this.props.filters

    if (this.props.type === 'sort') {
      return filters.map((filter) => {
        return <Filter
          key={filter.name}
          name={filter.name}
          isSelected={(filter.order !== 'none')}
          toggleFilter={this.props.toggleFilter}
        />
      })
    } else {
      return filters.map((filter) => {
        return <li key={filter.name}>
          { filter.name }
          <ul>
            { filter.values.map((value) => {
              return <Filter
                key={value}
                name={value}
                isSelected={filter.selectedValues.indexOf(value) >= 0}
                toggleFilter={this.props.toggleFilter}
              />
            }) }
          </ul>
        </li>
      })
    }
  }

  render() {
    return <div className={`large-4 medium-6 small-6 columns ${this.props.type === 'sort' ? 'sort' : 'filter large-pull-4'}`}>
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