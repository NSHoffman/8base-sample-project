import gql from 'graphql-tag';

export const USERS_LIST_QUERY = gql`
  query UsersList {
    usersList {
      items {
        id
        firstName
        lastName
      }
    }
  }
`;

export const CUSTOMER_CREATE_MUTATION = gql`
  mutation CustomerCreate($data: CustomerCreateInput!) {
    customerCreate(data: $data) {
      id
    }
  }
`;

export const CUSTOMER_DELETE_MUTATION = gql`
  mutation CustomerDelete($id: ID!) {
    customerDelete(data: { id: $id }) {
      success
    }
  }
`;

export const CUSTOMERS_LIST_QUERY = gql`
  query CustomersList {
    customersList {
      items {
        id
        user {
          email
          firstName
          lastName
        }
        orders {
          count
        }
      }
    }
  }
`;

export const ORDER_CREATE_MUTATION = gql`
  mutation OrderCreate($data: OrderCreateInput!) {
    orderCreate(data: $data) {
      id
    }
  }
`;

export const ORDER_DELETE_MUTATION = gql`
  mutation OrderDelete($id: ID!) {
    orderDelete(data: { id: $id }) {
      success
    }
  }
`;

export const ORDERS_LIST_QUERY = gql`
  query OrdersList($orderBy: [OrderOrderBy], $skip: Int, $first: Int) {
    ordersList(orderBy: $orderBy, skip: $skip, first: $first) {
      items {
        id
        createdAt
        product {
          id
          title
          price
          quantity
        }
        customer {
          id
          user {
            firstName
            lastName
          }
        }
        totalPrice
        quantity
      }
      count
    }
  }
`;

export const PRODUCTS_LIST_QUERY = gql`
  query ProductsList {
    productsList {
      items {
        id
        image {
          downloadUrl
        }
        title
        price
        quantity
        status
      }
    }
  }
`;

export const PRODUCTS_AVAILABLE_LIST_QUERY = gql`
  query ProductsList {
    productsList(filter: {
      AND: [
        { quantity: { not_equals: 0 }},
        { status: { not_equals: "Out of stock" }},
      ]
    }) {
      items {
        id
        image {
          downloadUrl
        }
        title
        price
        quantity
        status
      }
    }
  }
`;

export const PRODUCT_CREATE_MUTATION = gql`
  mutation ProductCreate($data: ProductCreateInput!) {
    productCreate(data: $data) {
      id
    }
  }
`;

export const PRODUCT_UPDATE_MUTATION = gql`
  mutation ProductUpdate($data: ProductUpdateInput!) {
    productUpdate(data: $data) {
      id
    }
  }
`;

export const PRODUCT_DELETE_MUTATION = gql`
  mutation ProductDelete($id: ID!) {
    productDelete(data: { id: $id }) {
      success
    }
  }
`;
