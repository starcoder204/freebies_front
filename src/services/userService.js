import { wrapRequest, xapi } from './utils'
import { oAuth2 } from '@/config/settings'

export const login = wrapRequest(async (payload) =>
  xapi().post('/auth/login', {
    ...oAuth2,
    ...payload
  })
)

export const logout = wrapRequest(async () =>
  xapi().post('/users/logout')
)
