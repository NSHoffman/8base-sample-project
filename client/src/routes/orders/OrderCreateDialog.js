import React from 'react';
import * as R from 'ramda';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, InputField, SelectField, useModal } from '@8base/boost';
import { useQuery, useMutation } from 'react-apollo';

import { CUSTOMERS_LIST_QUERY, PRODUCTS_LIST_QUERY, ORDER_CREATE_MUTATION } from '../../shared/graphql';
import { EMPTY_ARRAY, TOAST_SUCCESS_MESSAGE } from '../../shared/constants';

const getProductOptions = (products = []) => products.map(product => ({ value: product.id, label: product.title }));
const getUserOptions = (users = []) =>
  users.map(item => ({
    value: item.id,
    label: `${R.propOr('Unititled', 'firstName', item.user)} ${R.propOr('Unititled', 'lastName', item.user)}`,
  }));

const ORDER_CREATE_DIALOG_ID = 'ORDER_CREATE_DIALOG_ID';
const AVAILABLE_PRODUCTS_FILTER = {
  status: {
    equals: 'Available',
  },
  quantity: {
    not_equals: 0,
  },
};

export const OrderCreateDialog = () => {
  const { closeModal } = useModal(ORDER_CREATE_DIALOG_ID);

  const { data: customersData, loading: customersLoading } = useQuery(CUSTOMERS_LIST_QUERY);
  const { data: productsData, loading: productsLoading } = useQuery(PRODUCTS_LIST_QUERY, {
    variables: {
      filter: AVAILABLE_PRODUCTS_FILTER,
    },
  });
  const customers = customersData ? customersData.customersList.items : EMPTY_ARRAY;
  const products = productsData ?  productsData.productsList.items : EMPTY_ARRAY;


  const [orderCreate] = useMutation(ORDER_CREATE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Order successfully created',
    },
  });

  const onSubmit = async (data) => {
    await orderCreate({
      variables: { data },
      refetchQueries: ['OrdersList', 'ProductsList'],
    });

    closeModal(ORDER_CREATE_DIALOG_ID);
  };

  const onClose = () => closeModal(ORDER_CREATE_DIALOG_ID);

  const renderFormContent = ({ handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit}>
      <Dialog.Header title="New Order" onClose={onClose} />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
            <Field
              name="product"
              label="Product"
              placeholder="Select a product"
              component={SelectField}
              loading={productsLoading}
              options={productsLoading ? EMPTY_ARRAY : getProductOptions(products)}
              stretch
            />
          </Grid.Box>
          <Grid.Box>
            <Field
              name="customer"
              label="Customer"
              placeholder="Select a customer"
              component={SelectField}
              loading={customersLoading}
              options={customersLoading ? EMPTY_ARRAY : getUserOptions(customers)}
              stretch
            />
          </Grid.Box>
          <Grid.Box>
            <Field name="quantity" label="Quantity" type="text" placeholder="Quantity" component={InputField} />
          </Grid.Box>
        </Grid.Layout>
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={submitting} onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit" loading={submitting}>
          Create Order
        </Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ ORDER_CREATE_DIALOG_ID } size="sm">
      <Form type="CREATE" tableSchemaName="Orders" onSubmit={ onSubmit }>
        { renderFormContent }
      </Form>
    </Dialog>
  );
};

OrderCreateDialog.id = ORDER_CREATE_DIALOG_ID;