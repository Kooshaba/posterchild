import newState from './new_state'
import { SET_DATASET, TOGGLE_FILTER, TOGGLE_SORT } from '../actions'

const initialMainState = {
  dataset: [],
  filters: [],
  sorts: []
}

const nextSort = (sortName) => {
  const sortMapping = {
    "none": "asc",
    "asc": "desc",
    "desc": "none"
  }

  return sortMapping[sortName]
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
      sortNames.forEach((sortName) => newSorts.push({name: sortName, order: 'none'}))

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
        let sortMatches = sort.name === action.sortName
        sort.order = sortMatches ? nextSort(sort.order) : 'none'
        return sort
      })

      return newState(state, {
        sorts: sorts
      })

    default:
      return state
  }
}