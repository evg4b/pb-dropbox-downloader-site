import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ConfigurationContext } from '../context';
import { routes, fields } from '../constants';
import useRedirectIfNotAuthorized from './useRedirectIfNotAuthorized';

const useRedirectIfNotProvided = () => {
  useRedirectIfNotAuthorized();

  const { getField } = useContext(ConfigurationContext);
  const code = getField(fields.code);
  const history = useHistory();

  useEffect(() => {
    if (!(code || '').trim()) {
      history.replace(routes.provide);
    }
  }, [code]);
};

export default useRedirectIfNotProvided;
