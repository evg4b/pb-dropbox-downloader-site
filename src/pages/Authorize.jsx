/* eslint-disable max-len */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Button, Divider, Grid, Icon, Input } from 'semantic-ui-react';

const Authorize = () => (
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
        <Input fluid placeholder="Your access token..." action="Submit" />
      </div>
    </Grid.Column>
  </Grid>
);

export default Authorize;
