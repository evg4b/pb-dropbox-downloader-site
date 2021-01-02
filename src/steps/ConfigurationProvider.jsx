import React, { useState } from 'react';
import ConfigurationContext from './ConfigurationContext';

// eslint-disable-next-line react/prop-types
const ConfigurationProvider = ({ children }) => {
  const [configuration, setConfiguration] = useState({
    access_token: '',
    folder: './dropbox',
    allow_delete_files: true,
    on_sd_card: false,
  });

  return (
    <ConfigurationContext.Provider
      value={({
        configuration,
        updateField: (field, value) => {
          setConfiguration((prev) => ({ ...prev, [field]: value }));
        },
        getField: (field) => configuration[field],
      })}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

export default ConfigurationProvider;
