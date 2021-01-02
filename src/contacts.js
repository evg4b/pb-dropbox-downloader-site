import { resolve } from 'url';

export const routes = {
  authorize: '/',
  configuration: '/configuration',
  download: '/download',
  callback: '/callback',
};

export const spacer = '    ';

export const fields = {
  accessToken: 'access_token',
  folder: 'folder',
  allowDeleteFiles: 'allow_delete_files',
  onSdCard: 'on_sd_card',
};

const appCode = process.env.REACT_APP_CODE;
// eslint-disable-next-line no-restricted-globals
const callbackUrl = resolve(location.href, routes.callback);

export const dropbox = () => `https://www.dropbox.com/oauth2/authorize?client_id=${appCode}&response_type=token&redirect_uri=${callbackUrl}`;
