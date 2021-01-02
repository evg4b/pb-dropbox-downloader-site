import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Grid, Icon, Input } from 'semantic-ui-react';
import ConfigurationContext from '../steps/ConfigurationContext';

const Authorize = () => {
  const [customToken, setCustomToken] = useState('');
  const { updateField } = useContext(ConfigurationContext);
  const history = useHistory();

  const submitHandler = () => {
    updateField('access_token', customToken);
    history.push('/configuration');
  };

  const changeHandler = (_, { value }) => setCustomToken(value);

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <div className="authorize-variant">
          <p>Automatically authorize application</p>
          <Button as="a" color="blue" href="http://google.com">
            <Icon name="dropbox" /> Authorize
          </Button>
        </div>
        <Divider horizontal>Or</Divider>
        <div className="authorize-variant">
          <p>Provide your access token from your app</p>
          <Input
            fluid
            placeholder="Your access token..."
            action={{
              content: 'Submit',
              onClick: submitHandler,
            }}
            value={customToken}
            onChange={changeHandler}
          />
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Authorize;
