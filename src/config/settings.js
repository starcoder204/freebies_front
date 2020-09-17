export const apiBaseUrl = process.env.VUE_APP_API_ENDPOINT

export const oAuth2 = {
  client_secret: process.env.VUE_APP_CLIENT_SECRET,
  client_id: process.env.VUE_APP_OAUTH2_CLIENT_ID,
  grant_type: 'password'
}

export const loadingSpinnerConfig = {
  container: null,
  canCancel: false,
  onCancel: null,
  color: '#12407E',
  loader: 'spinner',
  backgroundColor: '#000000',
  opacity: 0.6
}
