import axios from 'axios';
import {FACEBOOK } from '../config'
export const getAccessTokenFromCode = async (code: string) => {

    const { data } = await axios({
      url: `${FACEBOOK.GRAPH_BASE_URL}/v4.0/oauth/access_token`,
      method: 'get',
      params: {
        client_id: process.env.APP_ID,
        client_secret: process.env.APP_SECRET,
        redirect_uri: FACEBOOK.REDIRECT_URL,
        code,
      },
    });
    return data.access_token;
  };

  export const getFacebookUserData = async (accessToken: string, fields: string[]) => {
    const { data } = await axios({
      url: `${FACEBOOK.GRAPH_BASE_URL}/me?metadata=1`,
      method: 'get',
      params: {
        fields: fields.join(','),
        access_token: accessToken,
      },
    });
    console.log(data)
    return data;
  };