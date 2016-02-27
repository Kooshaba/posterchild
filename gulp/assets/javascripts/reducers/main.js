import newState from './new_state'
import { SET_DATASET, TOGGLE_FILTER, TOGGLE_SORT } from '../actions'

const initialMainState = {
  dataset: [],
  filters: [],
  sorts: []
}

export default function (state = initialMainState, action) {
  switch (action.type) {
    case SET_DATASET:
      let tagNames = new Set()
      let sortNames = new Set()

      let newFilters = []
      let newSorts = []

      // fill in the filters
      action.dataset.forEach((datum) => {
        datum.tags.forEach((tag) => tagNames.add(tag))
        Object.keys(datum.sorts).forEach((sortName) => sortNames.add(sortName))
      })
      tagNames.forEach((tagName) => newFilters.push({name: tagName, isSelected: false}))
      sortNames.forEach((sortName) => newSorts.push({name: sortName, isSelected: false}))

      return newState(state, {
        dataset: action.dataset,
        filters: newFilters,
        sorts: newSorts
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

    case TOGGLE_SORT:
      let sorts = state.sorts.map((sort) => {
        if(sort.name === action.sortName) {
          sort.isSelected = true
        } else {
          sort.isSelected = false
        }

        return sort
      })

      return newState(state, {
        sorts: sorts
      })

    default:
      return state
  }
}