export const routes = {
  authorize: '/',
  configuration: '/configuration',
  download: '/download',
  provide: '/provide',
};

export const spacer = '    ';

export const fields = {
  code: 'code',
  code_verifier: 'code_verifier',
  folder: 'folder',
  allowDeleteFiles: 'allow_delete_files',
  onSdCard: 'on_sd_card',
};

const appCode = process.env.REACT_APP_CODE ?? 'srb8i7o71xkx08c';

const params = new URLSearchParams({
  client_id: appCode,
  response_type: 'code',
  token_access_type: 'offline',
  code_challenge: 'xxx',
  code_challenge_method: 'S256',
});

export const dropbox = (codeChallenge) => {
  params.set('code_challenge', codeChallenge);

  return `https://www.dropbox.com/oauth2/authorize?${params.toString()}`;
};
