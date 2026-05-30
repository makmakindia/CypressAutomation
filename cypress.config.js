const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'necfck',
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    testIsolation: false,
    chromeWebSecurity: false,

    specPattern: "cypress/e2e/demoexamples/*.spec.js",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/failure/screenshots",
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
  },
});
