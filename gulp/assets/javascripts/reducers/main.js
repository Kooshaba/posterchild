import newState from './new_state'
import { SET_DATASET, TOGGLE_FILTER } from '../actions'

const initialMainState = {
  dataset: [],
  filters: []
}

export default function (state = initialMainState, action) {
  switch (action.type) {
    case SET_DATASET:
      let tags = new Set()
      let newFilters = []

      action.dataset.forEach((datum) => {
        datum.tags.forEach((tag) => tags.add(tag))
      })

      tags.forEach((tag) => newFilters.push({name: tag, isSelected: false}))

      return newState(state, {
        dataset: action.dataset,
        filters: newFilters
      })

    case TOGGLE_FILTER:
      let filters = state.filters.map((filter) => {
        if (filter.name === action.filterName ) {
          filter.isSelected = !filter.isSelected
        }
        return filter
      })

      return newState(state, {
        filters: filters
      })

    default:
      return state
  }
}