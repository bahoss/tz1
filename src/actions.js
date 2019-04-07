import { AUTHORISATION } from './constants';

export const setAuth = bool => ({
  type: AUTHORISATION,
  payload: bool
});
