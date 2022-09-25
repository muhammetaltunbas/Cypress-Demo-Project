const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: "2sqnp8",
  e2e: {
    env: {
      baseUrl: 'https://katanamrp.com',
    },
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      
    },
    specPattern: 'cypress/integration/**/*.js',
    retries:{
      runMode:1
    }

  },
    
})
