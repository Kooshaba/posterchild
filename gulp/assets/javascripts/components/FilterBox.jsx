import Filter from './Filter.jsx'

class FilterBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  toggleActive() {
    this.setState({active: !this.state.active})
  }

  renderFilters() {
    let filters = this.props.filters

    if (this.props.type === 'sort') {
      return <div>
          <li className="group-name" key="sort">
            Sort by
          </li>
          { filters.map((filter) => {
            return <Filter
                key={filter.name}
                name={filter.name}
                isSelected={(filter.order !== 'none')}
                toggleFilter={this.props.toggleFilter}
              />
          })}
        </div>
    } else {
      return filters.map((filter) => {
        return <div>
          <li className="group-name" key={filter.name}>
            { filter.name }
          </li>
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
        </div>
      })
    }
  }

  render() {
    return <div className={`large-4 medium-6 small-6 columns ${this.props.type === 'sort' ? 'sort' : 'filter large-pull-4'}`}>
      <div className="dropdown-container">
        <a className="button" onClick={() => this.toggleActive()} href="#">{this.props.type === 'sort' ? 'Sort' : 'Filters'}</a>
        <ul className={`dropdown ${ this.state.active ? '' : 'hidden' }`}>
          {this.renderFilters()}
        </ul>
      </div>
    </div>
  }
}

FilterBox.propTypes = {
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  toggleFilter: React.PropTypes.func.isRequired
}

export default FilterBox