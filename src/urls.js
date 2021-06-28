const DEV_URL = 'http://localhost:3001/';
const PROD_URL = 'https://st-registration-system-api.herokuapp.com/';
export const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;