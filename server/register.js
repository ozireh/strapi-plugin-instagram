'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.cron.add({
    // runs every second
    check: {
      task: ({ strapi }) => {
        /* Add your own logic here */
      },
      // only run once after 10 seconds
      options: new Date(Date.now() + 10000)
    },
  });
};
