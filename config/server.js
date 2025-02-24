module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),  
  url: env('APP_URL', 'https://albernicolourcornerltd.xyz/back-end-colour'),
  app: { keys: env.array('APP_KEYS', ['key1', 'key2']) },
  admin: { path: '/back-end-colour/admin' },
  serveAdminPanel: true,
});
