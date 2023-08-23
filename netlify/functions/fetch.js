const fetch = require("node-fetch");

const API_ENDPOINT = 'https://tcs.vidhukant.xyz/api/registrations/quates';

exports.handler = async (event, context) => {
  console.log(context)
  try {
    const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify("{}")
    });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};