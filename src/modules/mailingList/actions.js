/**
 * Sign up for the mailing list
 * @param {string} emailAddress The supplied email address
 */
export function signUp(emailAddress) {
  return {
    type: 'MAILING_LIST_SIGN_UP',
    payload: {
      emailAddress
    }
  }
}