import React from 'react';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';

const Download = () => (
  <Grid className="configuration-form">
    <Grid.Column textAlign="center">
      <Header icon>
        <Icon name="check" />
        All done
      </Header>
      <p>Download this file and copy it on reader in folder <code>/system/config</code></p>
      <Button color="black">
        <Icon name="arrow down" />
        Download
      </Button>
    </Grid.Column>
  </Grid>
);

export default Download;
