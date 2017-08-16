export function showModal(type, props) {
  return {
    type: 'SHOW_MODAL',
    payload: {
      type,
      props
    }
  }
}

export function hideModal() {
  return {
    type: 'HIDE_MODAL',
  }
}