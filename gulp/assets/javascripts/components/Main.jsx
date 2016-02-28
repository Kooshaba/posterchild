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
        title: 'Aimee Manton',
        subtitle: 'Viviens',
        imageUrl: 'images/00001.jpg',
        email: 'amanton958@gmail.com',
        instagramUrl: 'https://www.instagram.com/aimee_manton/',
        agencyUrl: 'http://www.viviensmodels.com.au/models/aimee/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Brunette" },
        sorts: {
          "Followers": 4143,
          "Agency": "Viviens"
        }
      },
      {
        id: 2,
        title: 'Tanya Alers',
        subtitle: 'Chadwick',
        imageUrl: 'images/00002.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/tanyaalers/',
        agencyUrl: 'http://chadwickmodels.com/models/tanya-alers/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 593,
          "Agency": "Chadwick"
        }
      },
      {
        id: 3,
        title: 'Amelia Dunn',
        subtitle: 'Scene',
        imageUrl: 'images/00003.jpg',
        email: 'amelia.dunn@hotmail.com',
        instagramUrl: 'https://www.instagram.com/aamelia.dunn/',
        agencyUrl: 'http://www.scenemodels.com/models/melbourne/amelia-dunn/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Brunette" },
        sorts: {
          "Followers": 875,
          "Agency": "Scene"
        }
      },
      {
        id: 4,
        title: 'Amy Jean',
        subtitle: 'Viviens',
        imageUrl: 'images/00004.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/amyjjean_/',
        agencyUrl: 'http://www.viviensmodels.com.au/models/amy-jean-2/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Brunette" },
        sorts: {
          "Followers": 112,
          "Agency": "Viviens"
        }
      },
      {
        id: 5,
        title: 'Amy Staunton',
        subtitle: 'Viviens',
        imageUrl: 'images/00005.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/amy_staunton/',
        agencyUrl: 'http://www.viviensmodels.com.au/models/amy-staunton/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 2332,
          "Agency": "Viviens"
        }
      },
      {
        id: 6,
        title: 'Andreja Pejic',
        subtitle: 'Chadwick',
        imageUrl: 'images/00006.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/andrejapejic/',
        agencyUrl: 'http://chadwickmodels.com/models/andreja-pejic/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 198000,
          "Agency": "Chadwick"
        }
      },
      {
        id: 7,
        title: 'Ania Novak',
        subtitle: 'Viviens',
        imageUrl: 'images/00007.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/aniandseb/',
        agencyUrl: 'http://www.viviensmodels.com.au/models/ania-novak-melbourne/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 84,
          "Agency": "Viviens"
        }
      },
      {
        id: 8,
        title: 'Anna Davoll',
        subtitle: 'Viviens',
        imageUrl: 'images/00008.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/annadavoll/?hl=en',
        agencyUrl: 'http://www.viviensmodels.com.au/models/anna-davoll-sydney/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 3468,
          "Agency": "Viviens"
        }
      },
      {
        id: 9,
        title: 'Anna Jagodzinska',
        subtitle: 'Viviens',
        imageUrl: 'images/00009.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/annajofficial/',
        agencyUrl: 'http://www.viviensmodels.com.au/models/anna-jagodzinska/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Brisbane', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 9448,
          "Agency": "Viviens"
        }
      },
      {
        id: 10,
        title: 'Anna McEvoy',
        subtitle: 'Chadwick',
        imageUrl: 'images/00010.jpg',
        email: 'annamcevoy21@hotmail.com',
        instagramUrl: 'https://www.instagram.com/annamcevoy21/',
        agencyUrl: 'http://chadwickmodels.com/models/anna-mcevoy/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Brunette" },
        sorts: {
          "Followers": 74800,
          "Agency": "Chadwick"
        }
      },
      {
        id: 11,
        title: 'Annaleise Smith',
        subtitle: 'Chadwick',
        imageUrl: 'images/00011.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/annaleisesmith/',
        agencyUrl: 'http://chadwickmodels.com/models/annaleise-smith/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Brunette" },
        sorts: {
          "Followers": 719,
          "Agency": "Chadwick"
        }
      },
      {
        id: 12,
        title: 'Annie Bugden',
        subtitle: 'Chadwick',
        imageUrl: 'images/00012.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/iamanniebugden/',
        agencyUrl: 'http://chadwickmodels.com/models/annie-bugden/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 1137,
          "Agency": "Chadwick"
        }
      },
      {
        id: 13,
        title: 'Anouska Freedman',
        subtitle: 'Chadwick',
        imageUrl: 'images/00013.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/nushfreedman/',
        agencyUrl: 'http://chadwickmodels.com/models/anouska/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 2209,
          "Agency": "Chadwick"
        }
      },
      {
        id: 14,
        title: 'Antonella Aloisio',
        subtitle: 'Viviens',
        imageUrl: 'images/00014.jpg',
        email: 'nellacaloisio@outlook.com',
        instagramUrl: 'https://www.instagram.com/nellaloisio/',
        agencyUrl: 'http://www.viviensmodels.com.au/models/antonella/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 10900,
          "Agency": "Viviens"
        }
      },
      {
        id: 15,
        title: 'Antonina Petkovic',
        subtitle: 'Viviens',
        imageUrl: 'images/00015.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/antoninapetkovic/?hl=en',
        agencyUrl: 'http://www.viviensmodels.com.au/models/antonina-petkovic/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Brisbane', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 18700,
          "Agency": "Viviens"
        }
      },
      {
        id: 16,
        title: 'Ashika Pratt',
        subtitle: 'Chadwick',
        imageUrl: 'images/00016.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/ASHIKA_PRATT/',
        agencyUrl: 'http://chadwickmodels.com/models/ashika/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 17000,
          "Agency": "Chadwick"
        }
      },
      {
        id: 17,
        title: 'Ashleigh Wesseling',
        subtitle: 'Chadwick',
        imageUrl: 'images/00017.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/ashleighwesseling/',
        agencyUrl: 'http://chadwickmodels.com/models/ashleigh-wesseling/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Sydney', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 1677,
          "Agency": "Chadwick"
        }
      },
      {
        id: 18,
        title: 'Ashley Hart',
        subtitle: 'Chadwick',
        imageUrl: 'images/00018.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/ashleyhart1111/',
        agencyUrl: 'http://chadwickmodels.com/models/ashley-hart/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Melbourne', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 65900,
          "Agency": "Chadwick"
        }
      },
      {
        id: 19,
        title: 'Ashley Osborne',
        subtitle: 'Chadwick',
        imageUrl: 'images/00019.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/ASHLEY_OH/',
        agencyUrl: 'http://chadwickmodels.com/models/ashley-osborne/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Sydney', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 102000,
          "Agency": "Chadwick"
        }
      },
      {
        id: 20,
        title: 'Asia Piwka',
        subtitle: 'Viviens',
        imageUrl: 'images/00020.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/asiapiwka/?hl=en',
        agencyUrl: 'http://www.viviensmodels.com.au/models/asia-piwka/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Brisbane', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 8172,
          "Agency": "Viviens"
        }
      },
      {
        id: 21,
        title: 'Babs De Jongh',
        subtitle: 'Chadwick',
        imageUrl: 'images/00021.jpg',
        email: '',
        instagramUrl: 'https://www.instagram.com/babsdej/',
        agencyUrl: 'http://chadwickmodels.com/models/babs/',
        date: moment().format("DD/MM/YYYY h:mm A").toString(),
        tags: {"City": 'Sydney', "Hair Color": "Blonde" },
        sorts: {
          "Followers": 712,
          "Agency": "Chadwick"
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