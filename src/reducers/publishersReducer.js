export const publishersReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PUBLISHERS':
      return action.publishers;
    default:
      return state;
  }
}