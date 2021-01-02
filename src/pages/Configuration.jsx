/* eslint-disable object-curly-newline */
/* eslint-disable dot-notation */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import useRedirectIfNotAuthorized from '../hooks/useRedirectIfNotAuthorized';
import ConfigurationContext from '../steps/ConfigurationContext';

const Configuration = () => {
  const { getField, updateField } = useContext(ConfigurationContext);
  const history = useHistory();
  useRedirectIfNotAuthorized();

  const handler = (field) => (_, target) => updateField(field, target.value || target.checked);

  return (
    <Form
      className="configuration-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Form.Input
        label="Folder"
        placeholder="Folder"
        icon="folder"
        iconPosition="left"
        onChange={handler('folder')}
        value={getField('folder')}
      />
      <Form.Checkbox
        label="Save on SD card"
        onChange={handler('on_sd_card')}
        checked={getField('on_sd_card')}
      />
      <Form.Checkbox
        label="Delete files from reader"
        onChange={handler('allow_delete_files')}
        checked={getField('allow_delete_files')}
      />
      <div className="footer">
        <Button color="black" onClick={() => history.push('/download')}>
          Submit configuration
        </Button>
      </div>
    </Form>
  );
};

export default Configuration;
