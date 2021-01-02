/* eslint-disable object-curly-newline */
/* eslint-disable dot-notation */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { useAccessTokenInfo } from '../hooks';

const Configuration = () => {
  const info = useAccessTokenInfo();
  const history = useHistory();

  useEffect(() => {
    if (info['access_token']) {
      history.push('/');
    }
  }, [info]);

  return (
    <Form
      className="configuration-form"
      onSubmit={(event) => {
        const data = new FormData(event.target);
        const value = Object.fromEntries(data.entries());
        // eslint-disable-next-line no-console
        console.log({ value });
        event.preventDefault();
        return false;
      }}
    >
      <Form.Input label="Folder" placeholder="Folder" icon="folder" iconPosition="left" />
      <Form.Checkbox label="Save on SD card" />
      <Form.Checkbox label="Delete files from reader" />
      <div className="footer">
        <Button type="submit" color="black">Submit configuration</Button>
      </div>
    </Form>
  );
};

export default Configuration;
