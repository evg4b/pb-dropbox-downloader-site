import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ConfigurationContext from '../steps/ConfigurationContext';

const useRedirectIfNotAuthorized = () => {
  const { getField } = useContext(ConfigurationContext);
  const token = getField('access_token');
  const history = useHistory();

  useEffect(() => {
    if (!(token || '').trim()) {
      history.replace('/');
    }
  }, [token]);
};

export default useRedirectIfNotAuthorized;
