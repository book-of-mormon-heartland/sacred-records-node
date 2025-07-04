const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const  GOOGLE_APPLICATION_CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;


module.exports = {
  isProduction,
  isDevelopment,
  GOOGLE_APPLICATION_CREDENTIALS
};