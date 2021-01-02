import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Icon, Step } from 'semantic-ui-react';

const StepsView = () => {
  const authorize = !!useRouteMatch({ path: '/', exact: true });
  const configure = !!useRouteMatch('/configuration');
  const download = !!useRouteMatch('/download');

  return (
    <Step.Group>
      <Step active={authorize} completed={configure || download}>
        <Icon name="dropbox" />
        <Step.Content>
          <Step.Title>Authorize</Step.Title>
          <Step.Description>Authorize application</Step.Description>
        </Step.Content>
      </Step>
      <Step active={configure} completed={download}>
        <Icon name="setting" />
        <Step.Content>
          <Step.Title>Configure</Step.Title>
          <Step.Description>Configure synchronization</Step.Description>
        </Step.Content>
      </Step>
      <Step active={download}>
        <Icon name="arrow down" />
        <Step.Content>
          <Step.Title>Download</Step.Title>
          <Step.Description>Download configuration file</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
};

export default StepsView;
