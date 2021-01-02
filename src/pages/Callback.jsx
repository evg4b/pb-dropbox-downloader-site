/* eslint-disable dot-notation */
import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import useAccessTokenInfo from '../hooks/useAccessTokenInfo';
import ConfigurationContext from '../steps/ConfigurationContext';
import { routes, fields } from '../contacts';

const Callback = () => {
  const info = useAccessTokenInfo();
  const { updateField } = useContext(ConfigurationContext);
  const history = useHistory();

  useEffect(() => {
    if (info && (info[fields.accessToken] || '').trim()) {
      updateField(fields.accessToken, info[fields.accessToken]);
      history.push(routes.configuration);
    }
  }, [info]);

  return (
    <Dimmer active>
      <Loader>Loading token information</Loader>
    </Dimmer>
  );
};

export default Callback;
