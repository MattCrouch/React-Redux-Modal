const initialState = {
  modals: [],
  hiding: false 
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_MODAL': {
      const clonedState = JSON.parse(JSON.stringify(state));

      clonedState.modals.push({
        type: action.payload.type,
        props: action.payload.props,
      })
      return clonedState;
    }
    case 'HIDING_MODAL':
      const clonedState = JSON.parse(JSON.stringify(state));

      clonedState.hiding = true;
      return clonedState;
    case 'HIDE_MODAL': {
      const clonedState = JSON.parse(JSON.stringify(state));

      clonedState.modals.pop();

      clonedState.hiding = false;

      return clonedState;
    }
    default:
      return state;
  }
}