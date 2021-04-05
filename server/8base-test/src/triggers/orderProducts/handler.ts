import { FunctionContext, FunctionEvent, FunctionResult } from '8base-cli-types';
import gql from 'graphql-tag';

const PRODUCT_QUERY = gql`
  query OrderQuery($id: ID!) {
    product(id: $id) {
      quantity
      price
    }
  }
`;

const PRODUCT_UPDATE_MUTATION = gql`
  mutation ProductUpdate($filter: ProductKeyFilter!, $data: ProductUpdateInput!) {
    productUpdate(filter: $filter, data: $data) {
      id
      quantity
    }
  }
`;

type ResponseError = {
  message: string;
  code?: string;
}
type TriggerResult = FunctionResult<{}, {}, {}, Array<ResponseError>>;
type ProductData = {
  product: Product;
}
type Product = {
  id: string;
  quantity: number;
  price: number;
}
type ConnectedProduct = {
  connect: {
    id: Product["id"];
  };
}

export default async (
  event: FunctionEvent<{
    quantity: number;
    product: ConnectedProduct;
  }>,
  ctx: FunctionContext,
): TriggerResult => 
{
  let response = null;
  let productData = null;

  // Fetching data about available product's quantity

  try {
    productData = await ctx.api.gqlRequest<ProductData>(PRODUCT_QUERY, { id: event.data.product.connect.id })
      .then(res => res.product);
  }
  catch (e) {
    response = {
      errors: [{ message: `Error: Can't retrieve data from Products table! Details: ${e.message}` }],
    };
    return response;
  }

  // Defining whether or not there is enough product units to fulfill the order

  let prodQty = productData.quantity;
  let ordQty = event.data.quantity;

  if (prodQty - ordQty < 0) {
    response = {
      errors: [{ message: `Error: Ordered amount exceeds the available product's quantity!` }],
    }
    return response;
  }

  // Calculating order's total price

  const orderedQty = event.data.quantity;
  const price = productData.price;
  const totalPrice = price * orderedQty;

  if (typeof totalPrice !== "number" || Number.isNaN(totalPrice)) {
    response = {
      errors: [{ message: "Error: Can't set totalPrice to the current order!" }],
    };
    return response;
  }

  // Substracting the ordered amount from the available product's quantity

  try {
    const id = event.data.product.connect.id;

    await ctx.api.gqlRequest<ProductData>(
      PRODUCT_UPDATE_MUTATION, 
      { 
        filter: { id },
        data: { quantity: prodQty - ordQty },
      });
  }
  catch (e) {
    response = {
      errors: [{ message: `Error: Can't set product quantity! Details: ${e.message}` }],
    };
    return response;
  }

  // Successful response with totalPrice included

  response = {
    data: {
      ...event.data,
      totalPrice,
    },
    errors: [],
  };

  return response;
};
