module.exports = {
  check: {
    task: ({ strapi }) => {
      /* Add your own logic here */
      console.log('check task')
    },
    // only run once after 10 seconds
    options: new Date(Date.now() + 10000)
  },
};