module.exports = {
  files: ["./src/**/*.{html,htm,css,js}"],
  server: {
    
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({
        index: '/project1/index.html',
        verbose: true,
      }),
    },
  },
};