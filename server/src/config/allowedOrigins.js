const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'http://storypath-front.vercel.app',
  process.env.ORIGIN,
];

module.exports = allowedOrigins;
