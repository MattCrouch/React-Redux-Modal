const initialState = {};

export default function modal(state = initialState, action) {
  switch(action.type) {
    // Act when a user signs up to the mailing list
    case 'MAILING_LIST_SIGN_UP': {
      // Clone the state
      const clonedState = JSON.parse(JSON.stringify(state));

      // Record email address
      clonedState.emailAddress = action.payload.emailAddress;
      return clonedState;
    }
    default:
      return state;
  }
}