import FilterBox from './FilterBox.jsx'

class Toolbar extends React.Component {
  render() {
    let filters = this.props.filters

    return (
      <div className="row sort-filter">
        <FilterBox filters={filters} toggleFilter={this.props.toggleFilter}/>
        <div className="large-4 columns center">
          <h1>
            <a id="logo" href="">
              <img className="model-image" src="../../../app/assets/images/logo.svg" />
            </a>
          </h1>
        </div>
        <FilterBox
          filters={[
            {
              name: "Rank",
              isSelected: true
            },
            {
              name: "Name",
              isSelected: false
            }
          ]}
          toggleFilter={this.props.toggleFilter}
        />
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleFilter: React.PropTypes.func.isRequired,
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Toolbar