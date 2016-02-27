import Filter from './Filter.jsx'

class FilterBox extends React.Component {
  filters() {
    return this.props.allFilters.map((filter) => {
      let isSelected = !!this.props.selectedFilters.find(
        (selectedFilter) => {
          return selectedFilter.name === filter.name
        }
      )

      return <Filter
        key={filter}
        name={filter}
        isSelected={isSelected}
      />
    })
  }

  render() {
    return <div className="large-4 columns filter">
      <ul className="">
        {this.filters()}
      </ul>
    </div>
  }
}

FilterBox.propTypes = {
  allFilters: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  selectedFilters: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
}

export default FilterBox