const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

const { default: neatCSV } = require("neat-csv");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

        on("task", {
        async parseCSV(csv) {
          const data = await neatCSV(csv);
          return data;
        }
      });


      return config;
    },
  },
});
