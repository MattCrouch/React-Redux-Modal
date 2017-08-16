const initialState = [];

export default function modal(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_MODAL': {
      const clonedState = JSON.parse(JSON.stringify(state));

      clonedState.push({
        type: action.payload.type,
        props: action.payload.props,
      })
      return clonedState;
    }
    case 'HIDE_MODAL': {
      const clonedState = JSON.parse(JSON.stringify(state));

      clonedState.pop();

      return clonedState;
    }
    default:
      return state;
  }
}