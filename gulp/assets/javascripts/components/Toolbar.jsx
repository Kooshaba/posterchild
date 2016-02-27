import FilterBox from './FilterBox.jsx'

class Toolbar extends React.Component {
  render() {
    let filters = this.props.filters

    return (
      <div>
        <div className="row">
          <div className="large-12 columns">
            <p className="center headline">Model citizens. Where culture begins. <a href="">Invitation</a> only.</p>
          </div>
        </div>
        <div className="row toolbar">
          <div className="large-4 large-push-4 columns center">
            <h1><a id="logo" href=""><img src="images/logo.svg" /></a></h1>
          </div>
          <FilterBox filters={filters} toggleFilter={this.props.toggleFilter}/>
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
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleFilter: React.PropTypes.func.isRequired,
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default Toolbar