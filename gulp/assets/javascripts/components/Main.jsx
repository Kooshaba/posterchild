import moment from 'moment'
import { connect } from 'react-redux'

import Toolbar from './Toolbar.jsx'
import CardContainer from './CardContainer.jsx'

import * as actions from '../actions'

class Main extends React.Component {

  componentDidMount() {
    this.getDatasetFromServer()
  }

  getDatasetFromServer() {
    $.get('/dataset').done((result) => { 
      this.props.dispatch(actions.setDataset(result.dataset))
    })
  }

  toggleFilter(filter) {
    this.props.dispatch(actions.toggleFilter(filter))
  }

  toggleSort(sort) {
    this.props.dispatch(actions.toggleSort(sort))
  }

  render() {
    let { filters, sorts, children } = this.props

    return (
      <div>
        <Toolbar
          filters={filters}
          sorts={sorts}
          toggleFilter={this.toggleFilter.bind(this)}
          toggleSort={this.toggleSort.bind(this)}
        />
        <div>
          { children }
        </div>
       </div>
    )
  }
}

Main.propTypes = {
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  sorts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

let selectState = (state) => {
  return {
    filters: state.main.filters,
    sorts: state.main.sorts
  }
}

export default connect(selectState)(Main)