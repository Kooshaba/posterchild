export const SET_DATASET = 'SET_DATASET'
export function setDataset(dataset) {
  return {
    type: SET_DATASET,
    dataset: dataset
  }
}

export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export function toggleFilter(filterValue) {
  return {
    type: TOGGLE_FILTER,
    filterValue: filterValue
  }
}

export const TOGGLE_SORT = 'TOGGLE_SORT'
export function toggleSort(sortName) {
  return {
    type: TOGGLE_SORT,
    sortName: sortName
  }
}