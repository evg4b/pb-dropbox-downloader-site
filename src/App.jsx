import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Configuration, Authorize, Download, Callback } from './pages';
import ConfigurationProvider from './steps/ConfigurationProvider';
import StepsView from './steps/StepsView';
import { routes } from './contacts';

const App = () => (
  <BrowserRouter>
    <Grid style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column>
        <Header as="h1" color="black" textAlign="center">
          PocketBook Dropbox Downloader
        </Header>
        <Segment compact className="block-center">
          <ConfigurationProvider>
            <StepsView />
            <Switch>
              <Route path={routes.callback} component={Callback} />
              <Route path={routes.download} component={Download} />
              <Route path={routes.configuration} component={Configuration} />
              <Route path={routes.authorize} component={Authorize} />
            </Switch>
          </ConfigurationProvider>
        </Segment>
      </Grid.Column>
    </Grid>
  </BrowserRouter>
);

export default App;
