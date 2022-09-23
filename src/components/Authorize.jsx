import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Icon } from 'semantic-ui-react';
import pkceChallenge from 'pkce-challenge';
import { routes, dropbox, fields } from '../constants';
import { ConfigurationContext } from '../context';

const Authorize = () => {
  const { updateField } = useContext(ConfigurationContext);
  const history = useHistory();

  const openDropbox = useCallback(() => {
    const chalange = pkceChallenge(128);

    updateField(fields.code_verifier, chalange.code_verifier);
    window.open(dropbox(chalange.code_challenge), 'newwindow', 'width=700,height=500');
    history.push(routes.provide);
  });

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <div className="authorize-variant">
          <p>Automatically authorize application</p>
          <Button as="a" color="blue" target="_blank" onClick={openDropbox}>
            <Icon name="dropbox" /> Authorize
          </Button>
        </div>
      </Grid.Column>
    </Grid>
  );
};

export default Authorize;
