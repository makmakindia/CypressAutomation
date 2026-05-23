const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,

    specPattern: "cypress/e2e/demoexamples/*.spec.js",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/failure/screenshots",
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
  },
});
