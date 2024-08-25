const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5000',
  'https://sotrypath-front.vercel.app/',
  process.env.ORIGIN,
];

module.exports = allowedOrigins;
