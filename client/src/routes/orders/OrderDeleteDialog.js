import React from 'react';
import { Form } from '@8base/forms';
import { Dialog, Button, useModal } from '@8base/boost';
import { useMutation } from 'react-apollo';

import { ORDER_DELETE_MUTATION } from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';

const ORDER_DELETE_DIALOG_ID = 'ORDER_DELETE_DIALOG_ID';

export const OrderDeleteDialog = () => {
  const { closeModal } = useModal(ORDER_DELETE_DIALOG_ID);
  const [ orderDelete ] = useMutation(ORDER_DELETE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Order successfully deleted',
    },
  });

  const onSubmit = (id) => async () => {
    await orderDelete({
      variables: { id },
      refetchQueries: ['OrdersList'],
    });
    closeModal(ORDER_DELETE_DIALOG_ID);
  }

  const onClose = () =>  closeModal(ORDER_DELETE_DIALOG_ID);

  const renderFormContent = ({ handleSubmit, invalid, submitting }) => (
    <form onSubmit={handleSubmit}>
      <Dialog.Header title="Delete Order Record" onClose={onClose} />
      <Dialog.Body scrollable>Do you really want to delete this order record?</Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={submitting} onClick={onClose}>
          Cancel
        </Button>
        <Button color="danger" type="submit" disabled={invalid} loading={submitting}>
          Delete Record
        </Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ ORDER_DELETE_DIALOG_ID } size="sm">
      {({ args }) =>
        <Form onSubmit={ onSubmit(args.id) }>
          { renderFormContent }
        </Form>
      }
    </Dialog>
  );
}

OrderDeleteDialog.id = ORDER_DELETE_DIALOG_ID;