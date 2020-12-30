module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 80),
  // url: 'https://casgroc-api.netlify.app/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6f4d52e5a16e59038d946b6b62fa3a45'),
    },
  },
});
