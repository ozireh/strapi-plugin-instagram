'use strict';

const cronTasks = require("./cron-tasks")

module.exports = {
  default: {},
  validator() {},
  cron: {
    enabled: true,
    tasks: cronTasks,
  }
};
