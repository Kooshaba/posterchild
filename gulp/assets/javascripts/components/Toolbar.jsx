import FilterBox from './FilterBox.jsx'

class Toolbar extends React.Component {
  render() {
    return (
      <div className="row sort-filter">
        <FilterBox allFilters={["Melbourne", "Sydney"]} selectedFilters={["Melbourne"]}/>
        <div className="large-4 columns center">
          <h1><a id="logo" href=""><img className="model-image" src="../../assets/images/logo.svg" /></a></h1>
        </div>
        <div className="large-4 columns sort">
          <ul className="">
            <li id="rank" className="selected"><a>Rank</a></li>
            <li id="name" className=""><a>Name</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Toolbar