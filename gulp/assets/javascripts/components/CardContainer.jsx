import moment from 'moment'

import Card from './Card.jsx'

class CardContainer extends React.Component {

  sampleData() {
    return [
      {
        id: 1,
        title: 'Sophie Arvebrink',
        imageUrl: 'https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/11875263_956127961114362_1447221200_n.jpg?ig_cache_key=MTA3MTkwNTE4OTk1NjU1NTg0MQ%3D%3D.2',
        date: moment().format("DD/MM/YYYY h:mm A").toString()
      }
    ]
  }

  renderCards() {
    // return this.props.visibleCards.map((card) => {
    return this.sampleData().map((card) => {
      return(
        <Card
          key={card.id}
          title={card.title}
          date={card.date}
          imageUrl={card.imageUrl}
        />
      )
    })
  }

  render() {
    return <div>
      { this.renderCards() }
    </div>
  }
}

CardContainer.propTypes = {
  visibleCards: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default CardContainer