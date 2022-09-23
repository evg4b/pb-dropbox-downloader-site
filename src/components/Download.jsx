import React, { useContext, useMemo } from 'react';
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import download from 'downloadjs';
import { ConfigurationContext } from '../context';
import { spacer } from '../constants';
import { useRedirectIfNotProvided } from '../hooks';

const Download = () => {
  useRedirectIfNotProvided();

  const { configuration } = useContext(ConfigurationContext);

  const viewFileContent = useMemo(
    () => JSON.stringify({ ...configuration, code: '*****', code_verifier: '*****' }, null, spacer),
    [configuration],
  );

  const downloadConfig = () => {
    download(JSON.stringify(configuration, null, spacer), 'pb-dropbox-downloader-config.json', 'text/json');
  };

  return (
    <Grid className="configuration-form">
      <Grid.Column textAlign="center">
        <Header icon>
          <Icon name="check" />
          All done
        </Header>
        <Segment inverted textAlign="left">
          <pre>{viewFileContent}</pre>
        </Segment>
        <p>Download this file and copy it on reader in folder <code>/system/config</code></p>
        <Button color="black" onClick={downloadConfig}>
          <Icon name="arrow down" />
          Download
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default Download;
