import FilterBox from './FilterBox.jsx'

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <FilterBox allFilters={["Melbourne", "Sydney"]} selectedFilters={["Melbourne"]}/>
      </div>
    )
  }
}

export default Toolbar