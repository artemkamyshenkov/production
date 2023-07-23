import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginState = (state: StateSchema) => state?.loginForm;
export const getUsername = (state: StateSchema) =>
  state?.loginForm?.username || '';
export const getPassword = (state: StateSchema) =>
  state?.loginForm?.password || '';
export const getuserIsLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || false;
export const getUserError = (state: StateSchema) =>
  state?.loginForm?.error || '';
