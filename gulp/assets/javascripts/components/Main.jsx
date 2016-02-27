import moment from 'moment'
import { connect } from 'react-redux'

import Toolbar from './Toolbar.jsx'
import CardContainer from './CardContainer.jsx'

import * as actions from '../actions'

class Main extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.setDataset(this.sampleData()))
  }

  sampleData() {
    return [
      {
        id: 1,
        title: 'Jane Smith',
        imageUrl: 'images/1.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Sydney'],
        sorts: {
          "Rank": 2
        }
      },
      {
        id: 2,
        title: 'Helene Doe',
        imageUrl: 'images/2.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Sydney'],
        sorts: {
          "Rank": 3
        }
      },
      {
        id: 3,
        title: 'Jacintha Campbell',
        imageUrl: 'images/3.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Sydney'],
        sorts: {
          "Rank": 1
        }
      },
      {
        id: 4,
        title: 'Stacey Smith',
        imageUrl: 'images/4.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Melbourne'],
        sorts: {
          "Rank": 4
        }
      },
      {
        id: 5,
        title: 'Ana Burgeoux',
        imageUrl: 'images/5.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Melbourne'],
        sorts: {
          "Rank": 6
        }
      },
      {
        id: 6,
        title: 'Kasia Wawyryska',
        imageUrl: 'images/6.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Melbourne'],
        sorts: {
          "Rank": 5
        }
      }
    ]
  }

  toggleFilter(filter) {
    this.props.dispatch(actions.toggleFilter(filter))
  }

  toggleSort(sort) {
    this.props.dispatch(actions.toggleSort(sort))
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          toggleFilter={this.toggleFilter.bind(this)}
          toggleSort={this.toggleSort.bind(this)}
        />
        <div>
          { this.props.children }
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