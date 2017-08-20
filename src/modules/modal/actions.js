export function showModal(type, props) {
  return {
    type: 'SHOW_MODAL',
    payload: {
      type,
      props
    }
  }
}

export function hidingModal() {
  return {
    type: 'HIDING_MODAL',
  }
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL',
  }
}