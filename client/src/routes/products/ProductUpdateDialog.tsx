import React from 'react';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, InputField, ActionDialog, useModal, RenderChildren, FormChildrenProps } from '@8base/boost';
import { useMutation } from 'react-apollo';

import { FileInputField } from '../../shared/components';
import { PRODUCT_UPDATE_MUTATION } from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';
import { MutationProductUpdateArgs, Product, ProductUpdateArgs, ProductUpdateInput, ArgsWithProps } from '../../shared/types';


const PRODUCT_UPDATE_DIALOG_ID = 'PRODUCT_UPDATE_DIALOG_ID';

export const ProductUpdateDialog: ActionDialog = () => {
  const { closeModal } = useModal(PRODUCT_UPDATE_DIALOG_ID);

  const [productUpdate] = useMutation<Product, MutationProductUpdateArgs>(PRODUCT_UPDATE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Product successfully updated!',
    },
  });

  const onSubmit = (id: string) => async (data: ProductUpdateInput) => {
    await productUpdate({
      variables: {
        data: { id, ...data },
      },
      refetchQueries: ['ProductsList'],
    });

    closeModal(PRODUCT_UPDATE_DIALOG_ID);
  };

  const onClose = () => {
    closeModal(PRODUCT_UPDATE_DIALOG_ID);
  };

  const renderFormContent: RenderChildren<FormChildrenProps> = ({ handleSubmit, invalid, submitting, pristine }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="Update Product" onClose={ onClose } />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
            <Field name="image" label="Image" component={ FileInputField as React.FC } maxFiles={ 1 } />
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
        <Button color="primary" type="submit" disabled={ pristine || invalid } loading={ submitting }>Update Product</Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ PRODUCT_UPDATE_DIALOG_ID } size="sm">
      {({ args }: ArgsWithProps<ProductUpdateArgs>) =>
        <Form type="UPDATE" tableSchemaName="Products" onSubmit={ onSubmit(args.initialValues.id) } initialValues={ args.initialValues }>
          { renderFormContent }
        </Form>
      }
    </Dialog>
  );
}

ProductUpdateDialog.id = PRODUCT_UPDATE_DIALOG_ID;
