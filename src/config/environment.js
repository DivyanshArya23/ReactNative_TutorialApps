import getEnvVars from '../../environment';

const { YELP } = getEnvVars();

export const YELP_ENV = {
  API_KEY: YELP.API_KEY || '',
  CLIENT_ID: YELP.CLIENT_ID || '',
};

export const a = '';
