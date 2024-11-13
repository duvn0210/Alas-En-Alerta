// jest.setup.js

globalThis.import = {
    meta: {
      env: {
        VITE_URL_BASE: 'http://localhost:3000', // Cambia este valor al que necesitas
      },
    },
  };
  