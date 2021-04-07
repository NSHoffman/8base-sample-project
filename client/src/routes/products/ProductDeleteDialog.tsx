import React from 'react';
import { Form } from '@8base/forms';
import { Dialog, Button, ActionDialog, RenderChildren, FormChildrenProps, useModal } from '@8base/boost';
import { useMutation } from 'react-apollo';

import { PRODUCT_DELETE_MUTATION } from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';
import { ProductDeleteInput, Product, ProductDeleteArgs, ArgsWithProps } from '../../shared/types';


const PRODUCT_DELETE_DIALOG_ID = 'PRODUCT_DELETE_DIALOG_ID';

export const ProductDeleteDialog: ActionDialog = () => {
  const { closeModal } = useModal(PRODUCT_DELETE_DIALOG_ID);

  const [productDelete] = useMutation<Product, ProductDeleteInput>(PRODUCT_DELETE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Product successfully deleted!',
    },
  });

  const onSubmit = (id: string) => async () => {
    await productDelete({
      variables: { id },
      refetchQueries: ['ProductsList'],
    });

    closeModal(PRODUCT_DELETE_DIALOG_ID);
  }

  const onClose = () => {
    closeModal(PRODUCT_DELETE_DIALOG_ID);
  };

  const renderFormContent: RenderChildren<FormChildrenProps> = ({ handleSubmit, invalid, submitting }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="Delete Product" onClose={ onClose } />
      <Dialog.Body scrollable>
        Do you really want to delete this product?
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ onClose }>Cancel</Button>
        <Button color="danger" type="submit" disabled={ invalid } loading={ submitting }>Delete Product</Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ PRODUCT_DELETE_DIALOG_ID } size="sm">
      {({ args }: ArgsWithProps<ProductDeleteArgs>) =>
        <Form onSubmit={ onSubmit(args.id) }>
          { renderFormContent }
        </Form>
      }
    </Dialog>
  );
}

ProductDeleteDialog.id = PRODUCT_DELETE_DIALOG_ID;
