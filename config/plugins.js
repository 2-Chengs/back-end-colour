module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'aX7kP2mQ8rT5jL9nB4vC6dF'), // Fallback for local testing
    },
  },
});
