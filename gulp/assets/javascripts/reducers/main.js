import _ from 'lodash'
import mergeWith from 'lodash.mergewith'
import newState from './new_state'
import { SET_DATASET, TOGGLE_FILTER, TOGGLE_SORT } from '../actions'

const initialMainState = {
  dataset: [],
  filters: [],
  sorts: []
}

const nextSort = (sortName) => {
  const sortMapping = {
    "none": "desc",
    "desc": "asc",
    "asc": "none"
  }

  return sortMapping[sortName]
}

const extractFilterValues = (filterMapping, filterValue, filterName) => {
  (filterMapping[filterName] || (filterMapping[filterName] = [])).push(filterValue)
  return filterMapping
}

const buildFilterObjects = (filterObjects, filterValues, filterName) => {
  let uniqueFilterValues = _.uniq(filterValues)
  let filterObject = {
    name: filterName,
    values: uniqueFilterValues,
    selectedValues: []
  }

  filterObjects.push(filterObject)
  return filterObjects
}

const buildSortNames = (sortNames, sortValue, sortName) => {
  sortNames.push(sortName)
  return sortNames
}

const buildSortObjects = (sortObjects, sortName) => {
  sortObjects.push({name: sortName, order: 'none'})
  return sortObjects
}

const addArrays = (sourceValues, newValues) => {
  if (_.isArray(sourceValues)) {
    return sourceValues.concat(newValues)
  }
}

export default function (state = initialMainState, action) {
  switch (action.type) {
    case SET_DATASET:
      let filterMapping = {}
      let sortNames = []

      action.dataset.forEach((datum) => {
        mergeWith(filterMapping, _.reduce(datum.tags, extractFilterValues, {}), addArrays)
        sortNames = _.reduce(datum.sorts, buildSortNames, [])
      })

      let newFilters = _.reduce(filterMapping, buildFilterObjects, [])
      let newSorts = _.reduce(_.uniq(sortNames), buildSortObjects, [])

      return newState(state, {
        dataset: action.dataset,
        filters: newFilters,
        sorts: newSorts
      })

    case TOGGLE_FILTER:
      let filters = state.filters.map((filter) => {
        let filterValue = action.filterValue

        if (filter.values.indexOf(filterValue) >= 0) {
          if (filter.selectedValues.indexOf(filterValue) < 0) {
            filter.selectedValues.push(filterValue)
          } else {
            _.pull(filter.selectedValues, filterValue)
          }
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