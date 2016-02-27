import _ from 'lodash'
import { connect } from 'react-redux'

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
          tags={card.tags}
        />
      )
    })
  }

  render() {
    return <div className="row card-container">
      { this.renderCards() }
    </div>
  }
}

let filterCards = (cards, filters) => {
  let activeTags = filters.filter((f) => f.isSelected)
    .map((filter) => filter.name)

  if(activeTags.length === 0) { return cards }

  return cards.filter((card) => {
    return _.intersection(card.tags, activeTags).length !== 0
  })
}

CardContainer.propTypes = {
  visibleCards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

let selectState = (state) => {
  return {
    visibleCards: filterCards(state.main.dataset, state.main.filters)
  }
}

export default connect(selectState)(CardContainer)