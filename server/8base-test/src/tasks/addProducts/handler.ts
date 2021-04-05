import gql from 'graphql-tag';
import { FunctionContext, FunctionEvent, FunctionResult } from '8base-cli-types';

const PRODUCT_RESTOCK_MUTATION = gql`
  mutation ProductUpdateByFilter {
    productUpdateByFilter(data: {
      quantity: { add: 100 }
    }) {
      count
    }
  }
`;

type TaskResult = FunctionResult<{}>;

export default async (
  event: FunctionEvent,
  ctx: FunctionContext,
): TaskResult => 
{
  let response = null;

  try {
    response = await ctx.api.gqlRequest(PRODUCT_RESTOCK_MUTATION, undefined, {
      checkPermissions: false,
    });
  }
  catch (e) {
    throw new Error(`Error: Can't restock products! Details: ${e.message}`);
  }

  return {
    data: {
      result: `Task executed: products have been restocked by 100 units each!`,
    },
  };
};
