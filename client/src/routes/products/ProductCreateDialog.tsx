import React from 'react';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, InputField, useModal, ActionDialog, RenderChildren, FormChildrenProps } from '@8base/boost';
import { useMutation } from 'react-apollo';
import { PRODUCT_CREATE_MUTATION } from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';
import { FileInputField } from '../../shared/components';
import { MutationProductCreateArgs, Product, ProductCreateInput, SubmitHandler } from '../../shared/types';


const PRODUCT_CREATE_DIALOG_ID = 'PRODUCT_CREATE_DIALOG_ID';

export const ProductCreateDialog: ActionDialog = () => {
  const { closeModal } = useModal(PRODUCT_CREATE_DIALOG_ID);

  const [productCreate] = useMutation<Product, MutationProductCreateArgs>(PRODUCT_CREATE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Product successfully created!',
    },
  });

  const onSubmit = async (data: ProductCreateInput) => {
    await productCreate({
      variables: { data },
      refetchQueries: ['ProductsList'],
    });
    closeModal(PRODUCT_CREATE_DIALOG_ID);
  };

  const onClose = () => {
    closeModal(PRODUCT_CREATE_DIALOG_ID);
  };

  const renderFormContent: RenderChildren<FormChildrenProps> = ({ handleSubmit, submitting }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="New Product" onClose={ onClose } />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
            <Field name="image" label="Image" component={ FileInputField } maxFiles={ 1 } public={ true } />
          </Grid.Box>
          <Grid.Box>
            <Field name="title" label="Title" type="text" component={ InputField } />
          </Grid.Box>
          <Grid.Box>
            <Field name="price" label="Price" type="text" component={ InputField } />
          </Grid.Box>
          <Grid.Box>
            <Field name="quantity" label="Quantity" type="text" component={ InputField } />
          </Grid.Box>
        </Grid.Layout>
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ onClose }>Cancel</Button>
        <Button color="primary" type="submit" loading={ submitting }>Create Product</Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ PRODUCT_CREATE_DIALOG_ID } size="sm">
      <Form type="CREATE" tableSchemaName="Products" onSubmit={ onSubmit as SubmitHandler }>
        { renderFormContent }
      </Form>
    </Dialog>
  );
}

ProductCreateDialog.id = PRODUCT_CREATE_DIALOG_ID;
