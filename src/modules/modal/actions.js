/**
 * Show a modal window
 * @param {string} type The type of modal to display
 * @param {Object} props Any relevant props to accompany it
 */
export function showModal(type, props) {
  return {
    type: 'SHOW_MODAL',
    payload: {
      type,
      props
    }
  }
}

/**
 * Start hiding a modal window
 */
export function hidingModal() {
  return {
    type: 'HIDING_MODAL',
  }
}

/**
 * Hide a modal window
 */
export function hideModal() {
  return {
    type: 'HIDE_MODAL',
  }
}