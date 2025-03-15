module.exports = [
  'strapi::errors',
  'strapi::security', // Add this line - it's required
  {
    name: 'strapi::cors',
    config: {
      // Remove the "enabled: true" line
      headers: '*',
      origin: ['https://newsfeed-tjfe.onrender.com', 'http://localhost:5173', 'http://localhost:1337']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];