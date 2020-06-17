const Lokka = require("lokka").Lokka;
const Transport = require("lokka-transport-http").Transport;

const faunaSecret = "fnADugDC4HACE30TjhyAct0bFNhchsZh6aR7oMN6"; // process.env.FAUNADBSECRET;

const headers = {
  Authorization: `Bearer ${faunaSecret}`,
};
const transport = new Transport("https://graphql.fauna.com/graphql", {
  headers,
});

const client = new Lokka({
  transport: transport,
});

exports.handler = async (event, context) => {
  let redirectUrl = "https://baldbeardedbuilder.com/";
  const path = event.queryStringParameters.path;

  console.dir(event);

  const realdeal = await getLongUrl(path);

  if (realdeal && realdeal.url) {
    redirectUrl = realdeal.url;
  }

  return {
    statusCode: 302,
    headers: {
      location: redirectUrl,
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({}),
  };
};

const getLongUrl = async (path) => {
  let longUrl = undefined;

  // Lookup path in FaunaDb & get the longUrl if it exists
  try {
    const variables = {
      source: path,
    };

    const data = await client.query(query, variables);

    if (data.shortyMcShortLinkBySource && data.shortyMcShortLinkBySource) {
      const shortLink = data.shortyMcShortLinkBySource;

      // TODO: Record the visit

      longUrl = shortLink.target;
    }
  } catch (err) {
    console.log(err);
  }

  return {
    url: longUrl,
  };
};

const query = `
  query getEm($source: String!) {
    shortyMcShortLinkBySource(source:$source){
      source
      target
      visits
    }
  }
`;
