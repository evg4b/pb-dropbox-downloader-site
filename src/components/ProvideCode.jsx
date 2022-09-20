import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Input } from 'semantic-ui-react';
import { fields, routes } from '../constants';
import { ConfigurationContext } from '../context';
import { useRedirectIfNotAuthorized } from '../hooks';

const ProvideCode = () => {
  useRedirectIfNotAuthorized();

  const [code, setCode] = useState('');
  const { updateField } = useContext(ConfigurationContext);
  const history = useHistory();

  const submitHandler = () => {
    updateField(fields.code, code);
    history.push(routes.configuration);
  };

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <div className="authorize-variant">
          <p>Provide your access token from your app</p>
          <Input
            fluid
            placeholder="Your access token..."
            action={{
              content: 'Submit',
              onClick: submitHandler,
            }}
            value={code}
            onChange={(_, { value }) => setCode(value)}
          />
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default ProvideCode;
