import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
  baseUrl: 'http://localhost:5173', // Puerto por defecto de Vite
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Implementar plugins aquí
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000, // Tiempo de espera para comandos
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  },
});
