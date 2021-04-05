import gql from "graphql-tag";
import { FunctionContext, FunctionEvent, FunctionResult } from '8base-cli-types';

const PRODUCT_UPDATE_MUTATION = gql`
  mutation ProductUpdate($filter: ProductKeyFilter!, $data: ProductUpdateInput!) {
    productUpdate(filter: $filter, data: $data) {
      id
      status
    }
  }
`;

type ResolverResult = FunctionResult<{
  success: boolean,
}>;
type MutationResponse = {
  id: string;
  status: string;
}

export default async (
  event: FunctionEvent<{ id: string, status: string }>,
  ctx: FunctionContext,
): ResolverResult => 
{
  let response = null;

  /**
   * Making updateProduct mutation with id filtering and passing "status" field
   * Status must equal to either "Available" or "Out of stock"
   * Otherwise -> Error
   */

  try {
    await ctx.api.gqlRequest<MutationResponse>(PRODUCT_UPDATE_MUTATION, {
      filter: { id: event.data.id },
      data: { status: event.data.status }
    }).then(res => res.status);
  }
  catch (e) {
    response = {
      data: { success: false },
      errors: [{ message: `Error: Can't set availability status! Details: ${e.message}` }],
    }
    return response;
  }

  response = {
    data: {
      success: true,
    },
  };
  return response;
};
