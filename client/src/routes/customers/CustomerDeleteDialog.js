import React from 'react';
import { Form } from '@8base/forms';
import { Dialog, Button, useModal } from '@8base/boost';
import { useMutation } from 'react-apollo';

import { CUSTOMER_DELETE_MUTATION } from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';


const CUSTOMER_DELETE_DIALOG_ID = 'CUSTOMER_DELETE_DIALOG_ID';

export const CustomerDeleteDialog = () => {
  const { closeModal } = useModal(CUSTOMER_DELETE_DIALOG_ID);

  const [customerDelete] = useMutation(CUSTOMER_DELETE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Customer successfully deleted',
    },
  });

  const onSubmit = (id) => async () => {
    await customerDelete({
      variables: { id },
      refetchQueries: ['CustomersList'],
    });
    closeModal(CUSTOMER_DELETE_DIALOG_ID);
  }

  const onClose = () => closeModal(CUSTOMER_DELETE_DIALOG_ID);

  const renderFormContent = ({ handleSubmit, invalid, submitting }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="Delete Customer" onClose={ onClose } />
      <Dialog.Body scrollable>
        Do you really want to delete this customer?
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ onClose }>Cancel</Button>
        <Button color="danger" type="submit" disabled={ invalid } loading={ submitting }>Delete Customer</Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ CUSTOMER_DELETE_DIALOG_ID } size="sm">
      {({ args }) =>
        <Form onSubmit={ onSubmit(args.id) }>
          { renderFormContent }
        </Form>
      }
    </Dialog>
  );
};

CustomerDeleteDialog.id = CUSTOMER_DELETE_DIALOG_ID;


