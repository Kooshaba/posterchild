export const SET_DATASET = 'SET_DATASET'
export function setDataset(dataset) {
  return {
    type: SET_DATASET,
    dataset: dataset
  }
}

export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export function toggleFilter(filterName) {
  return {
    type: TOGGLE_FILTER,
    filterName: filterName
  }
}