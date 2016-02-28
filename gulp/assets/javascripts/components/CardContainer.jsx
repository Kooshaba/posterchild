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
          subtitle={card.subtitle}
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
  let activeTags = _.reduce(filters.map((f) => f.selectedValues), (activeTags, selectedValues) => {
    return activeTags.concat(selectedValues)
  }, [])

  if(activeTags.length === 0) { return cards }

  return cards.filter((card) => {
    return _.intersection(_.values(card.tags), activeTags).length !== 0
  })
}

let sortCards = (cards, sorts) => {
  let activeSort = sorts.find((s) => s.order !== 'none')
  if (!activeSort) { return cards }

  let sortedCards = _.sortBy(cards, (card) => card.sorts[activeSort.name])
  return activeSort.order === 'desc' ? sortedCards.reverse() : sortedCards
}

CardContainer.propTypes = {
  visibleCards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

let selectState = (state) => {
  return {
    visibleCards: sortCards(filterCards(state.main.dataset, state.main.filters), state.main.sorts)
  }
}

export default connect(selectState)(CardContainer)