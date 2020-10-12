const axios = require('axios');
const qs = require('qs');

require('dotenv').config();

exports.handler = async (event, context) => {

  try {

    const data = qs.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      resource: 'https://cognitiveservices.azure.com/'
    });

    const response = await axios.post(`https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/token`, data,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      });

    if (response && response.data) {
      const { access_token } = response.data;

      return {
        statusCode: 200,
        headers: {
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({
          token: access_token,
          subdomain: process.env.SUBDOMAIN
        }),
      };
    }
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      headers: {
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ error: "Unable to acquire Azure AD token. Check the debugger for more information." }),
    };
  }
};
