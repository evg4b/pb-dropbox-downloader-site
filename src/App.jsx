import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import { Grid, Header, Segment } from 'semantic-ui-react';
import { Configuration, Authorize, Download } from './pages';
import StepsView from './steps/StepsView';

const App = () => (
  <BrowserRouter>
    <Grid style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column>
        <Header as="h1" color="black" textAlign="center">
          PocketBook Dropbox Downloader
        </Header>
        <Segment compact className="block-center">
          <StepsView />
          <Switch>
            <Route path="/download" component={Download} />
            <Route path="/configuration" component={Configuration} />
            <Route path="/" component={Authorize} />
          </Switch>
        </Segment>
      </Grid.Column>
    </Grid>
  </BrowserRouter>
);

export default App;
