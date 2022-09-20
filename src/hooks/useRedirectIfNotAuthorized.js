import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ConfigurationContext } from '../context';
import { routes, fields } from '../constants';

const useRedirectIfNotAuthorized = () => {
  const { getField } = useContext(ConfigurationContext);
  const codeVerifier = getField(fields.code_verifier);
  const history = useHistory();

  useEffect(() => {
    if (!(codeVerifier || '').trim()) {
      history.replace(routes.authorize);
    }
  }, [codeVerifier]);
};

export default useRedirectIfNotAuthorized;
