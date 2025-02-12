export default () => ({});
module.exports = ({ env }) => ({
    // Other plugin configurations
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'), // Read from environment variable
      },
    },
  });