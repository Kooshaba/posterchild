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
        tags: ['Sydney']
      },
      {
        id: 2,
        title: 'Helene Doe',
        imageUrl: 'images/2.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Sydney']
      },
      {
        id: 3,
        title: 'Jacintha Campbell',
        imageUrl: 'images/3.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Sydney']
      },
      {
        id: 4,
        title: 'Stacey Smith',
        imageUrl: 'images/4.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Melbourne']
      },
      {
        id: 5,
        title: 'Ana Burgeoux',
        imageUrl: 'images/5.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Melbourne']
      },
      {
        id: 6,
        title: 'Kasia Wawyryska',
        imageUrl: 'images/6.jpg',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: ['Melbourne']
      }
    ]
  }

  toggleFilter(filter) {
    this.props.dispatch(actions.toggleFilter(filter))
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          toggleFilter={this.toggleFilter.bind(this)}
        />
        <div>
          { this.props.children }
        </div>
       </div>
    )
  }
}

Main.propTypes = {
  filters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

let selectState = (state) => {
  return {
    filters: state.main.filters
  }
}

export default connect(selectState)(Main)