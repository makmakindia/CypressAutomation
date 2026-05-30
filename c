const { defineConfig } = require("cypress");
const preprocessor = require("@klaveness/cypress-cucumber-preprocessor");
const browserify = require("@klaveness/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  require("cypress-mochawesome-reporter/plugin")(on);

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "necfck",
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   require("cypress-mochawesome-reporter/plugin")(on);
    // },
    testIsolation: false,
    chromeWebSecurity: false,

    specPattern: "cypress/e2e/demoexamples/BDD/*.feature",
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/failure/screenshots",
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
  },
});
