import { createContext } from 'react';

const ConfigurationContext = createContext({
  configuration: {},
  updateField: () => { throw new Error(); },
  getField: () => { throw new Error(); },
});

export default ConfigurationContext;
