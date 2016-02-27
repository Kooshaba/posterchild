import Card from './Card.jsx'

class CardContainer extends React.Component {
  renderCards() {
    return this.props.visibleCards.map((card) => {
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
    return <div className="card-container">
      { this.renderCards() }
    </div>
  }
}

CardContainer.propTypes = {
  visibleCards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default CardContainer