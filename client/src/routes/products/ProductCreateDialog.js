import React from 'react';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, InputField, ModalContext } from '@8base/boost';
import { graphql } from 'react-apollo';
import { PRODUCT_CREATE_MUTATION } from '../../shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from '../../shared/constants';
import { FileInputField } from '../../shared/components';

const PRODUCT_CREATE_DIALOG_ID = 'PRODUCT_CREATE_DIALOG_ID';

class ProductCreateDialog extends React.Component {
  static contextType = ModalContext;

  onSubmit = async (data) => {
    await this.props.productCreate({ variables: { data }});

    this.context.closeModal(PRODUCT_CREATE_DIALOG_ID);
  };

  onClose = () => {
    this.context.closeModal(PRODUCT_CREATE_DIALOG_ID);
  };

  renderFormContent = ({ handleSubmit, invalid, submitting, pristine }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="New Product" onClose={ this.onClose } />
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
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ this.onClose }>Cancel</Button>
        <Button color="primary" type="submit" loading={ submitting }>Create Product</Button>
      </Dialog.Footer>
    </form>
  );

  render() {
    return (
      <Dialog id={ PRODUCT_CREATE_DIALOG_ID } size="sm">
        <Form type="CREATE" tableSchemaName="Products" onSubmit={ this.onSubmit }>
          { this.renderFormContent }
        </Form>
      </Dialog>
    );
  }
}

ProductCreateDialog = graphql(PRODUCT_CREATE_MUTATION, {
  name: 'productCreate',
  options: {
    refetchQueries: ['ProductsList'],
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Product successfully created'
    },
  },
})(ProductCreateDialog);

ProductCreateDialog.id = PRODUCT_CREATE_DIALOG_ID;
export { ProductCreateDialog };
