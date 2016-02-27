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
        title: 'Sophie Arvebrink',
        imageUrl: 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/11875263_956127961114362_1447221200_n.jpg?ig_cache_key=MTA3MTkwNTE4OTk1NjU1NTg0MQ%3D%3D.2',
        date: moment().format("DD/MM/YYYY h:mm A").toString()
      },
      {
        id: 2,
        title: 'Sophie Arvebrink',
        imageUrl: 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/11875263_956127961114362_1447221200_n.jpg?ig_cache_key=MTA3MTkwNTE4OTk1NjU1NTg0MQ%3D%3D.2',
        date: moment().format("DD/MM/YYYY h:mm A").toString()
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