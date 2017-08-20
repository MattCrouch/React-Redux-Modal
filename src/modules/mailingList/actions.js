export function signUp(emailAddress) {
  return {
    type: 'MAILING_LIST_SIGN_UP',
    payload: {
      emailAddress
    }
  }
}