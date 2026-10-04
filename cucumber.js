const common = {
  paths: ['features/**/*.feature'],
  requireModule: ['ts-node/register'],
  require: ['step-definitions/**/*.ts', 'support/**/*.ts'],
  format: [
    'progress',
    'html:reports/cucumber-report.html',
    'allure-cucumberjs/reporter',
  ],
  formatOptions: {
    resultsDir: 'allure-results',
  },
  publishQuiet: true,
};

module.exports = {
  default: common,
  smoke: {
    ...common,
    tags: '@smoke',
  },
};