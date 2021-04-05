# 8base App Example

## Server Setup

1. Sign up 8base account;
2. Install 8base CLI `npm install -g 8base`;
3. Login using CLI `8base login`;
4. Go to the server directory `cd server`;
5. Select workspace `8base configure`;
6. Install dependencies `npm install`;
7. Deploy custom functions `8base deploy`;
8. Import schema and data via `8base import -f=DEMO.JSON --data=false`. This will take aroud 2 minutes;

## Client Setup

1. Go to the client directory `cd client`;
2. Install dependencies `npm install`;
3. Get 8base API endpoint for your account;
4. Set up environment variables for the client in a separate `.env.local` file:
    * `REACT_APP_8BASE_API_ENDPOINT=`**https://api.8base.com/ckmxps85u02d907l4g5364rq1**
    * `REACT_APP_AUTH0_CLIENT_ID=`**ikOch0Iyv0Mj0X0Vx5SG95acUUvCT4i9**
    * `REACT_APP_AUTH0_DOMAIN=`**dev-jee-yb2x.eu.auth0.com**
5. Login to the app with your 8base credentials;
6. Explore it.
