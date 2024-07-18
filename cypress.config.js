const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: "https://wearenotch.com/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
    },
  },
});
