const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'to58ob',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
