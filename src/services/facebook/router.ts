import express, { Router, Request, Response } from 'express';
import * as queryString from 'query-string';
import { FACEBOOK } from '../../config'
import { getAccessTokenFromCode, getFacebookUserData } from '../../util/facebook';
class Facebook {
    router: Router;
    constructor() {
        this.router = express.Router();
        this.router.get('/', (req: Request, res: Response) => this.requestAuthenticate(req, res))
        this.router.get('/authenticate/facebook', (req: Request, res: Response) => this.getAccessToken(req, res))
    }

    private requestAuthenticate(req: Request, res: Response) {
        const stringifiedParams = queryString.stringify({
            client_id: FACEBOOK.APP_ID,
            redirect_uri: FACEBOOK.REDIRECT_URL,
            scope: ['email', 'user_friends'].join(','), // comma seperated string
            response_type: 'code',
            auth_type: 'rerequest',
            display: 'popup',
          });
          const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
        
          res.send(`<a href=${facebookLoginUrl}>
                Login with Facebook
            </a>`);
    }

    private async getAccessToken(req: Request, res: Response)  {
        try {
            const accessToken = await getAccessTokenFromCode(req.query.code as string);
            console.log(accessToken);
            const userData = await getFacebookUserData(accessToken, ['id', 'email', 'first_name', 'last_name']);
            res.status(200).json(userData);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
       
    }
}
export default Facebook;