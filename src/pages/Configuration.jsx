import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import useRedirectIfNotAuthorized from '../hooks/useRedirectIfNotAuthorized';
import ConfigurationContext from '../steps/ConfigurationContext';
import { fields, routes } from '../contacts';

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
        onChange={handler(fields.folder)}
        value={getField(fields.folder)}
      />
      <Form.Checkbox
        label="Save on SD card"
        onChange={handler(fields.onSdCard)}
        checked={getField(fields.onSdCard)}
      />
      <Form.Checkbox
        label="Delete files from reader"
        onChange={handler(fields.allowDeleteFiles)}
        checked={getField(fields.allowDeleteFiles)}
      />
      <div className="footer">
        <Button color="black" onClick={() => history.push(routes.download)}>
          Submit configuration
        </Button>
      </div>
    </Form>
  );
};

export default Configuration;
