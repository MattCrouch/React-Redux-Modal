const initialState = {};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case 'MAILING_LIST_SIGN_UP': {
      const clonedState = JSON.parse(JSON.stringify(state));

      clonedState.emailAddress = action.payload.emailAddress;
      return clonedState;
    }
    default:
      return state;
  }
}