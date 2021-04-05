import fetch from 'node-fetch';
import { FunctionContext, FunctionEvent } from '8base-cli-types';

const CUSTOM_SEARCH_APIKEY = "AIzaSyDzE2PaJ_Txm406y4lPkLuhWAOd3DCKju0";
const SEARCH_ENGINE_ID = "ba9a2b879322991dc";

type WebhookResult = {
  statusCode: number,
  body: string,
};
type Params = {
  pathParameters: {
    query: string;
  };
}
type GoogleSearchResponse = {
  items: Array<{ link: string; [key: string]: any }>
  [key: string]: any;
}

export default async (
  event: FunctionEvent & Params,
  ctx: FunctionContext,
): Promise<WebhookResult> => 
{
  let image = "";

  try {
    const query = encodeURI(event.pathParameters.query.replace(/_/g, " "));
    image = await fetch(`https://www.googleapis.com/customsearch/v1?key=${CUSTOM_SEARCH_APIKEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${query}`)
      .then(result => result.json())
      .then(
        (response: GoogleSearchResponse) => response.items[0].link
      );
  }
  catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        result: `Error: Request failure. Details: ${e.message}`,
      }),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      image,
    }),
  };
};
