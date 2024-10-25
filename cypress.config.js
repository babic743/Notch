const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "https://wearenotch.com/",
    watchForFileChanges: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
    },
  },
});
