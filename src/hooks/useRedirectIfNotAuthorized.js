import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ConfigurationContext from '../steps/ConfigurationContext';
import { routes, fields } from '../contacts';

const useRedirectIfNotAuthorized = () => {
  const { getField } = useContext(ConfigurationContext);
  const token = getField(fields.accessToken);
  const history = useHistory();

  useEffect(() => {
    if (!(token || '').trim()) {
      history.replace(routes.authorize);
    }
  }, [token]);
};

export default useRedirectIfNotAuthorized;
