const user = (state = [], action) => {
  switch (action.type) {
    case 'USER_DETAILS':
      return { ...state, userDetails: action.value }
    default:
      return state
  }
}

export default user