import newState from './new_state'
import {} from '../actions'

const initialContainerState = {
  visibleCards: []
}

export default function (state = initialContainerState, action) {
  switch (action.type) {

    // case SHOW_NOTIFICATION:
    //   return newState(state, {
    //     messages: state.messages
    //   })

    default:
      return state
  }
}