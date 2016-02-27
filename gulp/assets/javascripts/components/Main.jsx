import moment from 'moment'

import Toolbar from './Toolbar.jsx'
import CardContainer from './CardContainer.jsx'

class Main extends React.Component {

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

  render() {
    return (
      <div>
         <Toolbar />
         <CardContainer visibleCards={this.sampleData()}/>
       </div>
    )
  }
}

export default Main