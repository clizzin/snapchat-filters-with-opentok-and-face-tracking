- [Sign Up to TokBox](#sign-up-to-tokbox)
- [Create a Session](#create-a-session)
- [Generate a Token](#generate-a-token)
- [Configure Application](#configure-application)
- [Install Dependencies](#install-dependencies)
- [Run the Application](#run-the-application)

## Sign Up to TokBox

Head over to [TokBox to sign up](https://tokbox.com/account/user/signup). Once you've confirmed your email address and logged in, you'll be able to click on **Create Project** from your [account overview](https://tokbox.com/account/#/). Create a new OpenTok API project by clicking on **Create Custom Project**. Give your project a name and click on **Create**.

Now, make a note of your *API KEY* and *SECRET* for the config step.

## Create a Session

Having created your project, you'll be redirected to the project dashboard. Scroll down to *Project Tools* and click on **Create Session ID**. You could also choose between *Relayed* and *Routed*. Basically, *Relayed* attempts a peer-to-peer connection but will use relay servers when firewalls block peer-to-peer. *Routed* is the default where streams go to the OpenTok Media Router. You can [read more about sessions in the documention](https://tokbox.com/developer/guides/create-session/).

Make a note of the *SESSION ID* that gets created.

## Generate a Token

Before we configure the application, we need to generate a token. On your project dashboard, under *Project Tools* (the same section where you created your session ID), enter the *SESSION ID* you just generated and click **Generate token**.

Make a note of the *GENERATED TOKEN* for the next step.

## Configure Application

Make a copy of `config.js.example` and save it as `config.js` (in the js directory) making sure to modify the values to those from your TokBox account.

*API KEY*, *SESSION ID* and *TOKEN* are all created above. If you are running the application locally using `npm start`, you will need a *BASE URL* of `http://127.0.0.1:8080`. For something like Heroku, it's more like `https://app-name.herokuapp.com`.

Your `config.js` will end up looking something like this.

```js
(function closure(exports) {
  exports.BASE_URL = 'base url';
  exports.API_KEY = 'api key';
  exports.SESSION_ID = 'session id';
  exports.TOKEN = 'token';
})(exports);
```

## Install Dependencies

```bash
npm install
```

## Run the Application

```bash
npm start
```