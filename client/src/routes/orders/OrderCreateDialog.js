import React from 'react';
import * as R from 'ramda';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, InputField, SelectField, ModalContext } from '@8base/boost';
import { Query, graphql } from 'react-apollo';

import * as sharedGraphQL from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';

const getProductOptions = (products = []) => products.map(product => ({ value: product.id, label: product.title }));
const getUserOptions = (users = []) =>
  users.map(item => ({
    value: item.id,
    label: `${R.propOr('Unititled', 'firstName', item.user)} ${R.propOr('Unititled', 'lastName', item.user)}`,
  }));

const ORDER_CREATE_DIALOG_ID = 'ORDER_CREATE_DIALOG_ID';

class OrderCreateDialog extends React.Component {
  static contextType = ModalContext;

  onSubmit = async data => {
    await this.props.orderCreate({ variables: { data }});

    this.context.closeModal(ORDER_CREATE_DIALOG_ID);
  };

  onClose = () => {
    this.context.closeModal(ORDER_CREATE_DIALOG_ID);
  };

  renderFormContent = ({ handleSubmit, invalid, submitting, pristine }) => (
    <form onSubmit={handleSubmit}>
      <Dialog.Header title="New Order" onClose={this.onClose} />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
            <Query query={sharedGraphQL.PRODUCTS_AVAILABLE_LIST_QUERY}>
              {({ data, loading }) => (
                <Field
                  name="product"
                  label="Product"
                  placeholder="Select a product"
                  component={SelectField}
                  loading={loading}
                  options={loading ? [] : getProductOptions(data.productsList.items)}
                  stretch
                />
              )}
            </Query>
          </Grid.Box>
          <Grid.Box>
            <Query query={sharedGraphQL.CUSTOMERS_LIST_QUERY}>
              {({ data, loading }) => (
                <Field
                  name="customer"
                  label="Customer"
                  placeholder="Select a customer"
                  component={SelectField}
                  loading={loading}
                  options={loading ? [] : getUserOptions(data.customersList.items)}
                  stretch
                />
              )}
            </Query>
          </Grid.Box>
          <Grid.Box>
            <Field name="quantity" label="Quantity" type="text" placeholder="Quantity" component={InputField} />
          </Grid.Box>
        </Grid.Layout>
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={submitting} onClick={this.onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit" loading={submitting}>
          Create Order
        </Button>
      </Dialog.Footer>
    </form>
  );

  render() {
    return (
      <Dialog id={ORDER_CREATE_DIALOG_ID} size="sm">
        <Form type="CREATE" tableSchemaName="Orders" onSubmit={this.onSubmit}>
          {this.renderFormContent}
        </Form>
      </Dialog>
    );
  }
}

OrderCreateDialog = graphql(sharedGraphQL.ORDER_CREATE_MUTATION, {
  name: 'orderCreate',
  options: {
    refetchQueries: ['OrdersList', 'ProductsList'],
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Order successfully created',
    },
  },
})(OrderCreateDialog);

OrderCreateDialog.id = ORDER_CREATE_DIALOG_ID;
export { OrderCreateDialog };
