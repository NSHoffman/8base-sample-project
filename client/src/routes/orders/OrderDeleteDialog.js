import React from 'react';
import { Form } from '@8base/forms';
import { Dialog, Button, ModalContext } from '@8base/boost';
import { graphql } from 'react-apollo';

import * as sharedGraphQL from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';

const ORDER_DELETE_DIALOG_ID = 'ORDER_DELETE_DIALOG_ID';

class OrderDeleteDialog extends React.Component {
  static contextType = ModalContext;

  createOnSubmit = id => async () => {
    await this.props.orderDelete({ variables: { id } });

    this.context.closeModal(ORDER_DELETE_DIALOG_ID);
  };

  onClose = () => {
    this.context.closeModal(ORDER_DELETE_DIALOG_ID);
  };

  renderFormContent = ({ handleSubmit, invalid, submitting }) => (
    <form onSubmit={handleSubmit}>
      <Dialog.Header title="Delete Order Record" onClose={this.onClose} />
      <Dialog.Body scrollable>Do you really want to delete this order record?</Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={submitting} onClick={this.onClose}>
          Cancel
        </Button>
        <Button color="danger" type="submit" disabled={invalid} loading={submitting}>
          Delete Record
        </Button>
      </Dialog.Footer>
    </form>
  );

  renderContent = ({ args }) => <Form onSubmit={this.createOnSubmit(args.id)}>{this.renderFormContent}</Form>;

  render() {
    return (
      <Dialog id={ORDER_DELETE_DIALOG_ID} size="sm">
        {this.renderContent}
      </Dialog>
    );
  }
}

OrderDeleteDialog = graphql(sharedGraphQL.ORDER_DELETE_MUTATION, {
  name: 'orderDelete',
  options: {
    refetchQueries: ['OrdersList'],
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Order successfully deleted'
    },
  },
})(OrderDeleteDialog);

OrderDeleteDialog.id = ORDER_DELETE_DIALOG_ID;
export { OrderDeleteDialog };
