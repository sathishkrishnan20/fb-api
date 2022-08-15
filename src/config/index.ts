
import dotenv from 'dotenv';
dotenv.config();

export const FACEBOOK = {
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
    LOGIN_OAUTH_URL: 'https://www.facebook.com/v4.0/dialog/oauth',
    REDIRECT_URL: 'http://localhost:3000/authenticate/facebook',
    GRAPH_BASE_URL: 'https://graph.facebook.com'
}

